# Vercel Production Deployment - OktaAI

## What Changed

I've created a Vercel serverless function to handle the `/api/chat` endpoint in production. This replaces the Express server setup that only works for local development.

### Files Added:
- `/api/chat.js` - Vercel serverless function handler
- Updated `vercel.json` - Configuration for API routes and static files

## Deployment Steps

### 1. Ensure GEMINI_API_KEY is Set in Vercel

Go to your Vercel project:
1. Click **Settings**
2. Go to **Environment Variables**
3. Add or verify:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your actual API key from https://aistudio.google.com/app/apikey
   - **Environments**: Check `Production` and `Preview`
4. Click **Save**

### 2. Deploy to Production

Push your changes to the main branch:

```bash
git add .
git commit -m "Add Vercel serverless function for OktaAI chat API"
git push origin main
```

Vercel will automatically:
1. Build the Vite frontend
2. Deploy the `/api/chat.js` serverless function
3. Configure static file serving for the dist folder
4. Handle URL rewrites for SPA routing

### 3. Test in Production

Once deployment is complete:
1. Open your production URL: `https://www.oktawahyu.web.id`
2. Click the OktaAI chat button
3. Send a message like "Siapa itu Okta?"
4. You should get a response from the AI

## How It Works

### Vercel Setup:
- **Framework**: Vite (React)
- **Build Output**: `/dist` folder (Vite build)
- **API Handler**: `/api/chat.js` (Serverless Function)
- **Static Files**: Served from `/dist` by default

### Request Flow:
1. **Browser** sends POST to `/api/chat`
2. **Vercel** routes to `/api/chat.js` serverless function
3. **Handler** receives request, calls Gemini API
4. **Response** sent back to browser
5. **Chat** updates with AI response

## Production-Ready Features

- ✅ **Secure API Key**: Only stored on Vercel, never exposed to client
- ✅ **Serverless**: Auto-scales, no server management
- ✅ **Fast**: Built on Vercel's edge infrastructure
- ✅ **Reliable**: Automatic error handling with fallback responses
- ✅ **CORS Enabled**: Works from any domain

## Troubleshooting

### Still Getting 404?

1. Check Vercel deployment is "Ready ✓"
2. Verify `GEMINI_API_KEY` is set in Environment Variables
3. Clear browser cache and reload
4. Check browser console for actual error message

### Getting Rate Limited?

If you see "quota_exceeded" error, Gemini API has rate limits. Wait a moment and try again.

### Getting Fallback Responses?

This means `GEMINI_API_KEY` is not set. The app falls back to local responses based on keywords. Check Vercel Environment Variables.

## Local Development

For local development, you still use:
```bash
npm run dev:all
```

This runs Vite + Express server locally. Production uses serverless functions instead.

## Architecture Differences

| Aspect | Local | Production |
|--------|-------|-----------|
| Frontend Server | Vite Dev Server | Vercel Static Hosting |
| API Server | Express (server.js) | Serverless Function (/api/chat.js) |
| Port | 5173 (frontend), 3000 (backend) | HTTPS single domain |
| API Proxy | Vite dev proxy | Vercel routing |
