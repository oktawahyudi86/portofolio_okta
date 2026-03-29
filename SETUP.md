# OktaAI Setup Guide

## Overview

OktaAI adalah chatbot asisten virtual yang menjawab pertanyaan tentang Okta Wahyudi. Aplikasi ini menggunakan:
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Express.js
- **AI Model**: Google Gemini 2.0 Flash
- **Security**: Server-side API key management (tidak pernah exposed ke client)

## Prerequisites

Pastikan sudah install:
- Node.js (v18+)
- npm atau package manager lainnya

## Setup Lokal

### 1. Clone Repository
```bash
git clone https://github.com/oktawahyudi86/portofolio_okta.git
cd portofolio_okta
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Dapatkan API Key Gemini
1. Buka https://aistudio.google.com/app/apikey
2. Login dengan Google Account
3. Klik "Create API key" atau "Get API key"
4. Copy API key yang sudah di-generate

### 4. Setup Environment Variables
```bash
# Buka file .env
# Ubah nilai GEMINI_API_KEY dengan API key yang sudah di-dapat
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

**PENTING**: Jangan pernah commit `.env` ke repository!

## Running Locally

### Option 1: Run Both Frontend dan Backend
```bash
npm run dev:all
```

Ini akan start:
- Vite dev server (http://localhost:5173)
- Express API server (http://localhost:3000)

### Option 2: Run Backend Only
```bash
npm run dev:server
```

Aplikasi akan accessible di http://localhost:3000

### Option 3: Production Mode
```bash
npm run prod
```

Ini akan:
1. Build frontend (React)
2. Start server dengan production build

## Testing AI Chat

### Test via API (using curl)
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "text": "Siapa itu Okta Wahyudi?"}
    ]
  }'
```

### Test via Browser
1. Open http://localhost:3000
2. Klik icon OktaAI (chat bubble)
3. Ketik pertanyaan tentang Okta, contoh:
   - "Siapa itu Okta?"
   - "Apa pengalaman kerja Okta?"
   - "Project apa yang pernah dikerjakan Okta?"
   - "Bagaimana cara menghubungi Okta?"

## Troubleshooting

### Chat tidak berfungsi
1. **Check API Key**: Pastikan GEMINI_API_KEY sudah set di .env
2. **Check Server**: Pastikan server running di port 3000
3. **Check Browser Console**: Buka DevTools (F12) → Console tab untuk error details
4. **Check Server Logs**: Lihat terminal/console tempat server running

### Error: "chat sedang terkendala sesaat"
- API key mungkin invalid atau quota terlampaui
- Cek API key di https://aistudio.google.com/app/apikey
- Jika menggunakan free tier, mungkin ada rate limiting

### Port sudah digunakan
Jika port 3000 sudah digunakan:
```bash
PORT=3001 npm run dev:server
```

## Deployment ke Vercel

### 1. Push ke GitHub
Pastikan repository sudah ter-push ke GitHub di branch `main`

### 2. Connect ke Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import repository GitHub `portofolio_okta`
4. Pilih project settings

### 3. Add Environment Variables
Di Vercel project settings → Environment Variables:
- Key: `GEMINI_API_KEY`
- Value: Paste actual Gemini API key

**PENTING**: Jangan pernah share atau commit API key ke repository!

### 4. Deploy
Deployment akan otomatis ketika push ke `main` branch

## Project Structure

```
.
├── src/
│   ├── OktaAI.tsx          # Chat component
│   ├── App.tsx             # Main app
│   └── ...
├── server.js               # Express API server
├── okta-data.js            # Okta's profile data
├── vite.config.ts          # Vite config (no exposed API key)
├── .env                    # Local environment (DO NOT COMMIT)
├── .env.example            # Environment template
└── package.json
```

## Security Notes

✅ **What's Secure:**
- API key hanya tersimpan di `.env` (local) dan Vercel env vars (production)
- Client-side code tidak punya akses ke API key
- Semua AI requests go through backend (`/api/chat` endpoint)
- Backend securely menggunakan Gemini API

⚠️ **What NOT to do:**
- Jangan expose API key di client-side code
- Jangan commit `.env` file ke repository
- Jangan share API key di public places

## Support

Jika ada masalah:
1. Check ini file terlebih dahulu
2. Lihat browser console dan server logs
3. Verifikasi API key dan environment variables

Happy coding! 🚀
