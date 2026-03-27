import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const portfolioContext = `Nama: Okta Wahyudi
Profesi: Full Stack Developer & Technical Project Manager
Lokasi: Indonesia

Pengalaman:
- Lebih dari 5 tahun pengalaman dalam software development
- Expertise dalam React, Next.js, TypeScript, NestJS, PostgreSQL
- Pernah memimpin tim hingga 8 orang engineer
- Track record delivery pada jadwal dengan kualitas tinggi

Project Utama:
1. Website Business MRT Jakarta - Platform digital enterprise untuk operasi bisnis MRT Jakarta
2. Yulo Laundry Mobile App - Sistem manajemen laundry end-to-end
3. Dazo Apps & Cha AI - Aplikasi mobile dengan integrasi AI chatbot

Skills: React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Tailwind CSS, Docker, AWS

Untuk informasi lebih lanjut tentang Okta, berikan jawaban yang helpful dan friendly dalam bahasa Indonesia.`;

// API route for AI chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured' });
    }

    // Build conversation history for Gemini
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Prepare content array with portfolio context at the beginning
    const contents = [
      {
        role: 'user',
        parts: [{ text: `Konteks: ${portfolioContext}` }]
      },
      {
        role: 'model',
        parts: [{ text: 'Baik, saya sudah memahami konteks tentang Okta. Saya siap menjadi asisten virtual untuk menjawab pertanyaan seputar pengalaman dan project Okta.' }]
      },
      ...messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }))
    ];

    const result = await model.generateContent({
      contents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 500,
      }
    });

    const aiText = result.response.text() || "Maaf ya, OktaAI lagi istirahat sebentar. Coba lagi nanti? ✨";
    
    res.json({ text: aiText });
  } catch (error) {
    console.error('AI API Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/chat`);
});
