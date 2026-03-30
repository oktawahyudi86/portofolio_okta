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

// Load environment variables
envFiles.forEach((file) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    dotenv.config({ path: fullPath, override: false });
  }
});

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from dist if it exists
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Shared chat request handler
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

// API route for AI chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const result = await processChatRequest(messages);

    if (!result.success) {
      return res.status(result.statusCode).json({ error: result.error });
    }

    res.json(result.data);
  } catch (error) {
    console.error('[v0] Request handler error:', error);
    res.status(500).json({
      error: 'Internal server error',
      text: 'Maaf, ada masalah pada server. Coba lagi nanti.',
      fallback: true,
      provider: 'local',
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
