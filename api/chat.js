import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  getSystemPrompt,
  buildLocalFallbackReply,
  validateMessages,
  formatMessagesForGemini,
  handleGeminiError,
  extractTextFromResponse,
} from './utils.js';

// Process the chat request with Gemini API or fallback
async function processChatRequest(messages) {
  // Validate messages
  const validation = validateMessages(messages);
  if (!validation.valid) {
    return {
      success: false,
      error: validation.error,
      statusCode: 400,
    };
  }

  // If API key is not available, use fallback
  if (!process.env.GEMINI_API_KEY) {
    console.log('[v0] No GEMINI_API_KEY found, using fallback response');
    return {
      success: true,
      data: {
        text: buildLocalFallbackReply(messages),
        fallback: true,
        provider: 'local',
      },
    };
  }

  try {
    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
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

    return {
      success: true,
      data: {
        text: aiText,
        fallback: false,
        provider: 'gemini',
      },
    };
  } catch (error) {
    console.error('[v0] Gemini API Error:', error);
    const fallbackText = handleGeminiError(error, console);

    return {
      success: true,
      data: {
        text: fallbackText,
        fallback: true,
        provider: 'local',
        error:
          error?.status === 429
            ? 'quota_exceeded'
            : 'ai_request_failed',
      },
    };
  }
}

// Vercel serverless handler
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

    const result = await processChatRequest(messages);

    if (!result.success) {
      return res.status(result.statusCode).json({ error: result.error });
    }

    return res.json(result.data);
  } catch (error) {
    console.error('[v0] Handler Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      text: 'Maaf, ada masalah pada server. Coba lagi nanti.',
      fallback: true,
      provider: 'local',
    });
  }
}
