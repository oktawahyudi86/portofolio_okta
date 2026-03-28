import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { oktaData } from './okta-data.js';

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

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Build comprehensive context from oktaData
const buildOktaContext = () => {
  let context = "INFORMASI LENGKAP TENTANG OKTA WAHYUDI:\n\n";
  
  context += "DATA PRIBADI:\n";
  context += `Nama: ${oktaData.personalInfo.name}\n`;
  context += `Profesi: ${oktaData.personalInfo.title}\n`;
  context += `Lokasi: ${oktaData.personalInfo.location}\n`;
  context += `Email: ${oktaData.personalInfo.email}\n`;
  context += `HP: ${oktaData.personalInfo.phone}\n`;
  context += `LinkedIn: ${oktaData.personalInfo.linkedin}\n`;
  context += `GitHub: ${oktaData.personalInfo.github}\n`;
  context += `Status Pernikahan: ${oktaData.personalInfo.maritalStatus}\n`;
  context += `Anak: ${oktaData.personalInfo.children}\n\n`;

  context += "INFORMASI GAJI:\n";
  context += `Gaji Saat Ini: ${oktaData.salary.current}\n`;
  context += `Ekspektasi Gaji Jakarta: ${oktaData.salary.expectedJakarta}\n`;
  context += `Ekspektasi Gaji Yogyakarta: ${oktaData.salary.expectedYogja}\n\n`;

  context += "PENDIDIKAN:\n";
  context += `Gelar: ${oktaData.education.degree}\n`;
  context += `Spesialisasi: ${oktaData.education.specialization}\n`;
  context += `Universitas: ${oktaData.education.university}\n`;
  context += `IPK: ${oktaData.education.gpa}\n\n`;

  context += "SERTIFIKASI:\n";
  oktaData.certifications.forEach(cert => {
    context += `- ${cert}\n`;
  });
  context += "\n";

  context += "KOMPETENSI UTAMA:\n";
  oktaData.coreCompetencies.forEach(comp => {
    context += `- ${comp}\n`;
  });
  context += "\n";

  context += "SKILLS TEKNIS:\n";
  context += oktaData.technicalSkills.join(", ") + "\n\n";

  context += "PENGALAMAN KERJA:\n";
  oktaData.professionalExperience.forEach(exp => {
    context += `${exp.position} di ${exp.company} (${exp.period})\n`;
    context += `Lokasi: ${exp.location}\n`;
    exp.responsibilities.forEach(resp => {
      context += `- ${resp}\n`;
    });
    context += "\n";
  });

  context += "PROYEK UTAMA:\n";
  oktaData.projects.forEach(proj => {
    context += `${proj.title} (${proj.type})\n`;
    context += `Role: ${proj.role}\n`;
    context += `Impact: ${proj.impact}\n`;
    context += `Deskripsi: ${proj.description}\n`;
    context += `Tech Stack: ${proj.technologies.join(", ")}\n\n`;
  });

  context += "PENCAPAIAN:\n";
  oktaData.achievements.forEach(ach => {
    context += `- ${ach}\n`;
  });

  return context;
};

const oktaContext = buildOktaContext();

const systemPrompt = `Kamu adalah OktaAI, asisten virtual untuk menjawab pertanyaan tentang Okta Wahyudi saja.

PERATURAN KETAT YANG HARUS DIIKUTI:
1. HANYA jawab pertanyaan tentang Okta Wahyudi - pengalaman kerja, skills, project, informasi pribadi, pendidikan, sertifikasi
2. JANGAN jawab pertanyaan umum, coding help, atau topik lain yang tidak terkait Okta
3. JANGAN memberikan saran atau informasi tentang orang lain atau perusahaan lain
4. GUNAKAN format plain text TANPA markdown - tanpa bullet points, tanpa bold, tanpa italic, tanpa headers, tanpa links dengan format markdown
5. GUNAKAN bahasa Indonesia yang ramah dan profesional
6. Jika ditanya di luar scope Okta, gunakan fallback response yang sesuai

FALLBACK RESPONSES:
- Jika out of scope: "Maaf, saya hanya bisa menjawab pertanyaan seputar Okta Wahyudi. Apakah ada yang ingin kamu tanyakan tentang pengalaman profesional atau project Okta?"
- Jika data tidak ditemukan: "Informasi tersebut tidak tersedia di data Okta. Coba tanyakan tentang pengalaman kerja, project, atau skills Okta."
- Jika perlu klarifikasi: "Bisa dijelaskan lebih detail? Saya lebih siap menjawab pertanyaan spesifik tentang Okta."

KONTEKS OKTA:
${oktaContext}

Ingat: Semua jawaban HARUS tentang Okta dan TANPA markdown sama sekali.`;

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

    // Build conversation history for Gemini with system prompt
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash',
      systemInstruction: systemPrompt
    });
    
    // Prepare content array - just the conversation history
    const contents = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const result = await model.generateContent({
      contents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 800,
      }
    });

    const aiText = result.response.text() || "Maaf ya, OktaAI lagi istirahat sebentar. Coba lagi nanti. Apakah ada yang ingin ditanyakan tentang Okta?";
    
    res.json({ text: aiText });
  } catch (error) {
    console.error('AI API Error:', error);
    const status = error?.status === 429 ? 429 : 500;
    const message =
      status === 429
        ? 'Kuota Gemini API untuk sementara habis. Coba lagi beberapa saat lagi atau periksa billing dan limit API key Anda.'
        : 'AI sedang mengalami kendala saat memproses permintaan. Coba lagi sebentar lagi.';

    res.status(status).json({
      error: status === 429 ? 'quota_exceeded' : 'ai_request_failed',
      message,
      details: error?.message ?? 'Unknown server error',
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

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/chat`);
});
