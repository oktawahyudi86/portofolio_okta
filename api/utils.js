import { oktaData } from '../okta-data.js';

// Normalize text for comparison
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim();
};

// Build Okta context for system prompt
const buildOktaContext = () => {
  const personalInfo = oktaData.personalInfo;
  const experience = oktaData.professionalExperience
    .slice(0, 3)
    .map(
      (exp) =>
        `${exp.position} di ${exp.company} (${exp.period})`
    )
    .join('; ');
  const projects = oktaData.projects
    .slice(0, 3)
    .map((proj) => `${proj.title} - ${proj.type}`)
    .join('; ');
  const skills = oktaData.coreCompetencies.slice(0, 5).join(', ');

  return `
Nama: ${personalInfo.name}
Judul: ${personalInfo.title}
Lokasi: ${personalInfo.location}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}

Pengalaman Terbaru: ${experience}

Project Utama: ${projects}

Keahlian Inti: ${skills}

Pendidikan: ${oktaData.education.degree} dari ${oktaData.education.university}
Sertifikasi: ${oktaData.certifications.join(', ')}
`;
};

// System prompt for AI chat
export const getSystemPrompt = () => {
  const oktaContext = buildOktaContext();

  return `Kamu adalah OktaAI, asisten virtual untuk menjawab pertanyaan tentang Okta Wahyudi saja.

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
};

// Build fallback reply when API is unavailable
export const buildLocalFallbackReply = (messages = []) => {
  const latestUserMessage = [...messages]
    .reverse()
    .find(
      (message) =>
        message?.role === 'user' && typeof message.text === 'string'
    );

  const question = normalizeText(latestUserMessage?.text || '');

  if (!question) {
    return 'Halo! Saya bisa bantu jawab pertanyaan tentang pengalaman kerja, project, skills, atau background Okta Wahyudi.';
  }

  if (
    question.includes('siapa okta') ||
    question.includes('tentang okta') ||
    question.includes('perkenalkan')
  ) {
    return `Okta Wahyudi adalah IT Project Manager yang berfokus pada software delivery, stakeholder alignment, dan koordinasi project digital. Saat ini Okta berbasis di ${oktaData.personalInfo.location} dan memiliki pengalaman menangani project enterprise, SaaS, dan digital product.`;
  }

  if (
    question.includes('pengalaman') ||
    question.includes('career') ||
    question.includes('journey')
  ) {
    const latestRole = oktaData.professionalExperience[0];
    return `Saat ini Okta bekerja sebagai ${latestRole.position} di ${latestRole.company}. Sebelumnya Okta juga menangani delivery dan product execution di perusahaan seperti PT Ako Media Asia, PT Juragan Inovator Teknologi Indonesia, PT Divistant Teknologi Indonesia, Biznet, dan PT Sarana Insan Muda Selaras.`;
  }

  if (
    question.includes('skill') ||
    question.includes('keahlian') ||
    question.includes('kompetensi')
  ) {
    return `Keahlian utama Okta mencakup IT project management, Agile dan Scrum delivery, stakeholder communication, release planning, risk management, serta koordinasi lintas tim product, engineering, dan QA.`;
  }

  if (
    question.includes('project') ||
    question.includes('portfolio') ||
    question.includes('proyek')
  ) {
    const featuredProjects = oktaData.projects
      .slice(0, 3)
      .map((project) => project.title)
      .join(', ');
    return `Beberapa project utama yang pernah ditangani Okta antara lain ${featuredProjects}. Jika kamu mau, saya bisa jelaskan salah satu project tersebut lebih detail dari sisi peran, tantangan, dan hasil delivery-nya.`;
  }

  if (question.includes('mrt')) {
    const project = oktaData.projects.find((item) =>
      normalizeText(item.title).includes('mrt')
    );
    if (project) {
      return `${project.title} adalah project ${project.type} dengan peran Okta sebagai ${project.role}. Fokus utamanya ada di koordinasi requirement, stakeholder alignment, handoff ke tim development, testing, dan delivery sampai rilis.`;
    }
  }

  if (question.includes('yulo')) {
    const project = oktaData.projects.find((item) =>
      normalizeText(item.title).includes('yulo')
    );
    if (project) {
      return `${project.title} adalah ${project.type} yang ditangani Okta sebagai ${project.role}. Kontribusinya mencakup backlog prioritization, komunikasi stakeholder, dan menjaga rilis tetap selaras dengan kebutuhan bisnis.`;
    }
  }

  if (question.includes('dazo') || question.includes('ai')) {
    const project = oktaData.projects.find((item) =>
      normalizeText(item.title).includes('dazo')
    );
    if (project) {
      return `${project.title} menunjukkan pengalaman Okta dalam koordinasi delivery untuk platform AI dan operasional. Peran Okta berfokus pada milestone tracking, prioritas sprint, dan menjaga execution tetap rapi saat kebutuhan bisnis berubah cepat.`;
    }
  }

  if (
    question.includes('kontak') ||
    question.includes('hubungi') ||
    question.includes('email') ||
    question.includes('wa')
  ) {
    return `Okta bisa dihubungi melalui email ${oktaData.personalInfo.email}, nomor ${oktaData.personalInfo.phone}, atau LinkedIn ${oktaData.personalInfo.linkedin}.`;
  }

  if (
    question.includes('pendidikan') ||
    question.includes('kuliah') ||
    question.includes('universitas')
  ) {
    return `Okta menempuh pendidikan di ${oktaData.education.university} dengan gelar ${oktaData.education.degree} dan spesialisasi ${oktaData.education.specialization}.`;
  }

  return 'Saya bisa bantu jelaskan pengalaman kerja, project, skills, pendidikan, atau kontak Okta Wahyudi. Coba tanyakan salah satu topik itu ya.';
};

// Validate request messages
export const validateMessages = (messages) => {
  if (!messages || !Array.isArray(messages)) {
    return {
      valid: false,
      error: 'Messages array is required',
    };
  }

  if (messages.length === 0) {
    return {
      valid: false,
      error: 'Messages array cannot be empty',
    };
  }

  const lastMessage = messages[messages.length - 1];
  if (!lastMessage.role || !lastMessage.text) {
    return {
      valid: false,
      error: 'Each message must have role and text fields',
    };
  }

  return { valid: true };
};

// Format messages for Gemini API
export const formatMessagesForGemini = (messages) => {
  return messages.map((msg) => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }],
  }));
};

// Handle Gemini API errors
export const handleGeminiError = (error, logger = console) => {
  logger.error('[v0] Gemini API Error:', error);

  if (error.status === 429) {
    return 'Maaf, server sedang sibuk. Coba lagi dalam beberapa saat.';
  }

  if (error.status === 401 || error.status === 403) {
    logger.error('[v0] API Key issue - invalid or expired');
    return 'Maaf, ada masalah dengan konfigurasi server. Silakan coba lagi nanti.';
  }

  if (error.status === 400) {
    return 'Pertanyaan tidak valid. Coba rephrase pertanyaan Anda.';
  }

  return 'Maaf, ada masalah saat memproses pertanyaan Anda. Silakan coba lagi.';
};

// Extract text from Gemini response
export const extractTextFromResponse = (response) => {
  try {
    if (
      response &&
      response.candidates &&
      response.candidates.length > 0 &&
      response.candidates[0].content &&
      response.candidates[0].content.parts &&
      response.candidates[0].content.parts.length > 0
    ) {
      return response.candidates[0].content.parts[0].text || '';
    }
  } catch (error) {
    console.error('[v0] Error extracting response:', error);
  }
  return '';
};
