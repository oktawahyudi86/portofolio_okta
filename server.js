import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {
  getSystemPrompt,
  buildLocalFallbackReply,
  validateMessages,
  formatMessagesForGemini,
  handleGeminiError,
  extractTextFromResponse,
} from './api/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envFiles = ['.env.production', '.env'];

envFiles.forEach((file, index) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    dotenv.config({ path: fullPath, override: false });
  }
});

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Initialize Gemini AI only if API key exists
const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

// API route for AI chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    // Validate messages
    const validation = validateMessages(messages);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }

    // If API key is not available, use fallback
    if (!process.env.GEMINI_API_KEY || !genAI) {
      console.log('[v0] No GEMINI_API_KEY found, using fallback response');
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
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/share', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'share', 'index.html'));
});

app.get('/share/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'share', 'index.html'));
});

app.get('/cv_oktawahyudi', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'CV_Oktawahyudi.pdf'));
});

app.get('/cv_oktawahyudi/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'CV_Oktawahyudi.pdf'));
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/chat`);
});
