import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  getSystemPrompt,
  buildLocalFallbackReply,
  validateMessages,
  formatMessagesForGemini,
  handleGeminiError,
  extractTextFromResponse,
} from './utils.js';

// Initialize Gemini AI
const initializeGemini = () => {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  return new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    // Validate messages
    const validation = validateMessages(messages);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }

    // If API key is not available, use fallback
    if (!process.env.GEMINI_API_KEY) {
      console.log('[v0] No GEMINI_API_KEY found, using fallback response');
      return res.json({
        text: buildLocalFallbackReply(messages),
        fallback: true,
        provider: 'local',
      });
    }

    // Initialize Gemini
    const genAI = initializeGemini();
    if (!genAI) {
      return res.json({
        text: buildLocalFallbackReply(messages),
        fallback: true,
        provider: 'local',
      });
    }

    // Get system prompt and create model
    const systemPrompt = getSystemPrompt();
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: systemPrompt,
    });

    // Format messages for Gemini
    const formattedMessages = formatMessagesForGemini(messages);

    // Call Gemini API
    const result = await model.generateContent({
      contents: formattedMessages,
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 800,
      },
    });

    // Extract response text
    const aiText =
      extractTextFromResponse(result) ||
      'Maaf, ada masalah saat memproses pertanyaan Anda. Silakan coba lagi.';

    res.json({ text: aiText, fallback: false, provider: 'gemini' });
  } catch (error) {
    console.error('[v0] API Error:', error);
    const fallbackText = handleGeminiError(error, console);

    res.json({
      text: fallbackText,
      fallback: true,
      provider: 'local',
      error:
        error?.status === 429
          ? 'quota_exceeded'
          : 'ai_request_failed',
    });
  }
}
