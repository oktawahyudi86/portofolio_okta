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

const normalizeText = (value = '') =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const buildLocalFallbackReply = (messages = []) => {
  const latestUserMessage = [...messages]
    .reverse()
    .find((message) => message?.role === 'user' && typeof message.text === 'string');

  const question = normalizeText(latestUserMessage?.text || '');

  if (!question) {
    return 'Halo! Saya bisa bantu jawab pertanyaan tentang pengalaman kerja, project, skills, atau background Okta Wahyudi.';
  }

  if (question.includes('siapa okta') || question.includes('tentang okta') || question.includes('perkenalkan')) {
    return `Okta Wahyudi adalah IT Project Manager yang berfokus pada software delivery, stakeholder alignment, dan koordinasi project digital. Saat ini Okta berbasis di ${oktaData.personalInfo.location} dan memiliki pengalaman menangani project enterprise, SaaS, dan digital product.`;
  }

  if (question.includes('pengalaman') || question.includes('career') || question.includes('journey')) {
    const latestRole = oktaData.professionalExperience[0];
    return `Saat ini Okta bekerja sebagai ${latestRole.position} di ${latestRole.company}. Sebelumnya Okta juga menangani delivery dan product execution di perusahaan seperti PT Ako Media Asia, PT Juragan Inovator Teknologi Indonesia, PT Divistant Teknologi Indonesia, Biznet, dan PT Sarana Insan Muda Selaras.`;
  }

  if (question.includes('skill') || question.includes('keahlian') || question.includes('kompetensi')) {
    return `Keahlian utama Okta mencakup IT project management, Agile dan Scrum delivery, stakeholder communication, release planning, risk management, serta koordinasi lintas tim product, engineering, dan QA.`;
  }

  if (question.includes('project') || question.includes('portfolio') || question.includes('proyek')) {
    const featuredProjects = oktaData.projects.slice(0, 3).map((project) => project.title).join(', ');
    return `Beberapa project utama yang pernah ditangani Okta antara lain ${featuredProjects}. Jika kamu mau, saya bisa jelaskan salah satu project tersebut lebih detail dari sisi peran, tantangan, dan hasil delivery-nya.`;
  }

  if (question.includes('mrt')) {
    const project = oktaData.projects.find((item) => normalizeText(item.title).includes('mrt'));
    return `${project.title} adalah project ${project.type} dengan peran Okta sebagai ${project.role}. Fokus utamanya ada di koordinasi requirement, stakeholder alignment, handoff ke tim development, testing, dan delivery sampai rilis.`;
  }

  if (question.includes('yulo')) {
    const project = oktaData.projects.find((item) => normalizeText(item.title).includes('yulo'));
    return `${project.title} adalah ${project.type} yang ditangani Okta sebagai ${project.role}. Kontribusinya mencakup backlog prioritization, komunikasi stakeholder, dan menjaga rilis tetap selaras dengan kebutuhan bisnis.`;
  }

  if (question.includes('dazo') || question.includes('ai')) {
    const project = oktaData.projects.find((item) => normalizeText(item.title).includes('dazo'));
    return `${project.title} menunjukkan pengalaman Okta dalam koordinasi delivery untuk platform AI dan operasional. Peran Okta berfokus pada milestone tracking, prioritas sprint, dan menjaga execution tetap rapi saat kebutuhan bisnis berubah cepat.`;
  }

  if (question.includes('kontak') || question.includes('hubungi') || question.includes('email') || question.includes('wa')) {
    return `Okta bisa dihubungi melalui email ${oktaData.personalInfo.email}, nomor ${oktaData.personalInfo.phone}, atau LinkedIn ${oktaData.personalInfo.linkedin}.`;
  }

  if (question.includes('pendidikan') || question.includes('kuliah') || question.includes('universitas')) {
    return `Okta menempuh pendidikan di ${oktaData.education.university} dengan gelar ${oktaData.education.degree} dan spesialisasi ${oktaData.education.specialization}.`;
  }

  return 'Saya bisa bantu jelaskan pengalaman kerja, project, skills, pendidikan, atau kontak Okta Wahyudi. Coba tanyakan salah satu topik itu ya.';
};

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
      return res.json({
        text: buildLocalFallbackReply(messages),
        fallback: true,
        provider: 'local',
      });
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
    
    res.json({ text: aiText, fallback: false, provider: 'gemini' });
  } catch (error) {
    console.error('AI API Error:', error);
    res.json({
      text: buildLocalFallbackReply(req.body?.messages),
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
