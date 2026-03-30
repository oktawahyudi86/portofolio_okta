# OktaAI API Key Security Guide

## ✅ What Has Been Fixed

Your OktaAI application now has **secure API key management**:

### 1. **Removed Client-Side Exposure**
- ❌ **Before**: `GEMINI_API_KEY` was exposed in `vite.config.ts` → sent to browser
- ✅ **After**: API key remains server-side only in `server.js`

### 2. **All API Calls Go Through Server**
- The client (`OktaAI.tsx`) calls `/api/chat` endpoint
- Server (`server.js`) uses the API key securely on the backend
- Browser never sees the actual API key

### 3. **Environment Variables Properly Configured**
- `.env.example` clearly documents that API key is **server-side only**
- Never commit your actual `.env` file to Git (it's in `.gitignore`)

---

## 🔐 Setting Up in Vercel (Production)

### Step 1: Connect Your GitHub Repository
1. Go to https://vercel.com
2. Connect your `oktawahyudi86/portofolio_okta` repository

### Step 2: Add Environment Variables
1. In Vercel Dashboard → Project Settings → Environment Variables
2. Add the following:
   - **Variable Name**: `GEMINI_API_KEY`
   - **Value**: Your Google Gemini API key
   - **Environments**: Select "Production" (and "Preview" if you want it in preview deployments)

### Step 3: Deploy
Vercel will automatically use the environment variables during build and runtime.

---

## 🛡️ Security Best Practices

### ✅ DO:
- ✅ Store `GEMINI_API_KEY` in Vercel's Environment Variables (never in code)
- ✅ Use server-side endpoints for all sensitive API calls
- ✅ Keep `.env` file in `.gitignore` (already configured)
- ✅ Rotate API keys periodically
- ✅ Use Gemini's API key restrictions (if available in Google Cloud Console)

### ❌ DON'T:
- ❌ Commit `.env` file to Git
- ❌ Expose API keys in client-side code
- ❌ Log sensitive keys in console
- ❌ Share API keys in chat, issues, or documentation
- ❌ Use the same API key across multiple projects

---

## 🔑 Getting Your Gemini API Key

If you haven't created one yet:

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Choose "Create API Key in new Google Cloud project" or use existing project
4. Copy the API key
5. **Never share this key publicly**

---

## 📝 How It Works (Architecture)

```
Browser (Client)
    ↓
    ├─ User types message
    └─ Sends to /api/chat endpoint (no API key sent)
    
Server (Node.js)
    ├─ Receives request at /api/chat
    ├─ Retrieves GEMINI_API_KEY from environment
    ├─ Calls Google Gemini API with the key
    └─ Sends only the response back to browser

Google Gemini API
    └─ Only the server communicates with API using the secret key
```

---

## ✨ Summary

Your OktaAI is now production-ready with **secure API key management**:
- API keys stay on the server
- Client code is completely safe
- All sensitive operations happen server-side
- Ready to deploy to Vercel

When you deploy to Vercel, just add the `GEMINI_API_KEY` environment variable and you're all set! 🚀
