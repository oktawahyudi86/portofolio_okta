# Development Guide - OktaAI Chat

## Quick Start

### 1. Set up your environment
Create a `.env` file in the root directory with your Gemini API key:

```bash
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

Get your free API key from: https://aistudio.google.com/app/apikey

### 2. Install dependencies
```bash
npm install
```

### 3. Start development (IMPORTANT - use this command)
```bash
npm run dev:all
```

⚠️ **DO NOT use `npm run dev` alone!** This will only start Vite and the `/api/chat` endpoint will return 404.

## What Each Command Does

- **`npm run dev:all`** ✅ Recommended
  - Starts both Vite frontend (port 5173) and Express backend (port 3000)
  - Frontend proxies `/api` requests to backend
  - This is what you need for the chat to work!

- **`npm run dev`** (Frontend only)
  - Starts only Vite dev server on port 5173
  - The `/api/chat` endpoint won't work (404 error)
  - Only use this if you're working on UI components

- **`npm run dev:server`** (Backend only)
  - Starts only the Express server on port 3000
  - Frontend won't work, but you can test API endpoints directly
  - Only use this if you're working on backend code

## How the Chat Works

```
1. User types message in React component (OktaAI.tsx)
   ↓
2. Frontend sends POST request to http://localhost:5173/api/chat
   ↓
3. Vite dev server proxies this to http://localhost:3000/api/chat
   ↓
4. Express backend receives request
   ↓
5. Backend calls Google Gemini API with the message
   ↓
6. Backend returns AI response
   ↓
7. Frontend displays response in chat
```

## Testing the API Manually

If you want to test the API endpoint directly:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "text": "Siapa itu Okta?"}
    ]
  }'
```

## Common Issues

### "Failed to load resource: the server responded with a status of 404"
**Cause:** You're running only the frontend (Vite) without the backend
**Fix:** Run `npm run dev:all` instead of `npm run dev`

### "GEMINI_API_KEY is not set"
**Cause:** Missing `.env` file or empty API key
**Fix:** 
1. Create `.env` file in project root
2. Add: `GEMINI_API_KEY=your_actual_key`
3. Restart the dev server

### "API endpoint: http://localhost:3000/api/chat" but chat still doesn't work
**Cause:** Backend is running but frontend isn't connecting properly
**Fix:** 
1. Make sure you're accessing via Vite (http://localhost:5173)
2. Check browser DevTools Network tab to see if requests are being sent
3. Check that port 3000 is not blocked

## Production Deployment

For Vercel deployment:
1. Build the project: `npm run build`
2. Add `GEMINI_API_KEY` environment variable in Vercel dashboard
3. The `server.js` will serve the built frontend and handle API requests

## Development Tips

- Frontend code: `src/` directory
- Backend code: `server.js`
- Backend routes: Look for `app.post()` and `app.get()` in `server.js`
- Styling: Uses Tailwind CSS
- UI Components: React with Lucide icons
- AI Provider: Google Gemini API
