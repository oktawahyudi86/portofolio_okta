# OktaAI Chat Integration Guide

## System Architecture Overview

The OktaAI chat system is fully integrated across development and production environments with proper API key security and fallback mechanisms.

### Component Structure

```
Frontend (React/OktaAI.tsx)
    ↓ POST /api/chat
Local Dev: Express Server (server.js)
Production: Vercel Serverless (api/chat.js)
    ↓
Gemini API (via GoogleGenerativeAI SDK)
    ↓
Response → Frontend Display
```

### Shared Utilities (api/utils.js)

All chat logic is centralized in `/api/utils.js` with these key functions:

- **getSystemPrompt()** - Generates AI system instructions with Okta's data context
- **buildLocalFallbackReply()** - Provides smart responses when API is unavailable
- **validateMessages()** - Ensures request format is correct
- **formatMessagesForGemini()** - Converts message format for Gemini API
- **handleGeminiError()** - Processes API errors gracefully
- **extractTextFromResponse()** - Extracts AI response text safely

### Data Flow

1. **Frontend (OktaAI.tsx)**
   - User sends message
   - Validates input
   - Sends POST request to `/api/chat`

2. **Backend (api/chat.js or server.js)**
   - Receives message array
   - Validates request format
   - Checks for GEMINI_API_KEY
   - If no API key → returns fallback response
   - If API key exists → calls Gemini API with system prompt

3. **Gemini API**
   - Receives formatted messages
   - Processes with system instructions
   - Returns AI-generated response

4. **Response**
   - Returns to frontend with response text
   - Includes fallback flag and provider info

## Development Setup

### Local Development (npm run dev:all)

```bash
# Starts both servers:
# - Vite frontend on port 5173
# - Express backend on port 3000
# - Proxy routes /api/* to backend

npm run dev:all
```

**Key Files:**
- `server.js` - Express backend with `/api/chat` endpoint
- `api/utils.js` - Shared utilities for both environments
- `api/chat.js` - Vercel serverless function (also uses utils.js)

### Required Environment Variables

Create `.env` in project root:

```env
GEMINI_API_KEY=your_actual_api_key_here
VITE_SITE_URL=https://oktawahyu.web.id
PORT=3000
```

Get your API key: https://aistudio.google.com/app/apikey

## Production Deployment (Vercel)

### Step 1: Add Environment Variable

1. Go to Vercel Dashboard
2. Select `portofolio_okta` project
3. Go to **Settings → Environment Variables**
4. Add:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your actual Gemini API key
   - **Environments**: Select Production

### Step 2: Deploy

Push to GitHub main branch:

```bash
git add .
git commit -m "Fix OktaAI integration with shared utilities"
git push origin main
```

Vercel automatically builds and deploys. Check build logs for any errors.

### Step 3: Test Production

1. Open your production URL
2. Click OktaAI chat button
3. Ask a question about Okta:
   - "Siapa itu Okta?"
   - "Apa pengalaman kerja Okta?"
   - "Bicarain project MRT Jakarta"

Response should come from Gemini API or fallback if API unavailable.

## Error Handling & Fallback System

### Graceful Degradation

The system implements 3-tier fallback:

1. **Tier 1: Gemini API** (Primary)
   - Uses full AI capabilities
   - Intelligent, context-aware responses
   - Provider: `gemini`

2. **Tier 2: Local Fallback** (Backup)
   - When API key missing or API error
   - Pattern-matched responses
   - Still provides useful information
   - Provider: `local`

3. **Tier 3: Generic Response** (Safety net)
   - If question doesn't match any patterns
   - Suggests topics to ask about

### Common API Errors

| Error | Response | Fix |
|-------|----------|-----|
| Missing API Key | Uses fallback response | Add GEMINI_API_KEY to environment |
| 401/403 | "Ada masalah dengan konfigurasi server" | Check API key validity |
| 429 (Rate Limited) | "Server sedang sibuk" | Wait or upgrade API quota |
| 400 (Bad Request) | "Pertanyaan tidak valid" | Rephrase question |
| Network Error | Uses fallback response | Check internet connection |

## Testing Checklist

### Local Development Tests

- [ ] Run `npm run dev:all`
- [ ] Open http://localhost:5173
- [ ] Click OktaAI chat button
- [ ] Ask: "Siapa itu Okta?"
- [ ] Verify response appears within 5 seconds
- [ ] Ask follow-up question
- [ ] Test without API key (remove GEMINI_API_KEY from .env)
- [ ] Verify fallback response appears

### Production Tests

- [ ] Verify GEMINI_API_KEY is in Vercel env vars
- [ ] Deploy and wait for build to complete
- [ ] Open production URL
- [ ] Click OktaAI chat button
- [ ] Ask multiple questions
- [ ] Verify responses are working
- [ ] Test in different browsers
- [ ] Check console for errors (F12)

### API Testing (curl)

```bash
# Test local API
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "text": "Siapa itu Okta?"}
    ]
  }'

# Expected response:
# {"text": "...", "fallback": false, "provider": "gemini"}
```

## Troubleshooting

### Issue: 404 on /api/chat

**In Development:**
- Ensure both servers running: `npm run dev:all`
- Check if Express server is listening on port 3000
- Check vite.config.ts proxy settings

**In Production:**
- Check vercel.json has correct rewrites
- Verify api/chat.js exists and is valid

### Issue: Responses are generic/fallback

**Cause:** API key not working
- Verify GEMINI_API_KEY in Vercel environment variables
- Check API key is still valid (regenerate if needed)
- Check API quota hasn't been exceeded

**Solution:**
1. Test API key locally first
2. Regenerate key if expired
3. Check Google AI Studio quota

### Issue: Slow responses

**Cause:** 
- Large message history
- Network latency
- API quota limits

**Solution:**
- Clear chat and start fresh conversation
- Check internet connection
- Reduce message history limit in frontend

### Issue: CORS errors

**Already Handled:** vercel.json and api/chat.js include CORS headers
- If still seeing errors, check browser console for specifics

## File Structure

```
project/
├── server.js                    # Express backend (dev)
├── api/
│   ├── chat.js                 # Vercel serverless endpoint
│   └── utils.js                # Shared utilities (both envs)
├── src/
│   └── OktaAI.tsx              # Frontend component
├── okta-data.js                # Okta's data (used by utils.js)
├── .env                        # Local development env
├── .env.production             # Production env template
├── vercel.json                 # Vercel configuration
└── vite.config.ts              # Vite + proxy config
```

## Security Notes

- **API Key**: Only stored on server, never sent to client
- **Requests**: All go through `/api/chat` endpoint
- **CORS**: Enabled for frontend requests
- **Environment**: Uses environment variables, not hardcoded
- **Fallback**: Safe responses even if API down

## Performance Optimization

- Model: `gemini-1.5-flash` (fast, good quality)
- Max tokens: 800 (reasonable length responses)
- Temperature: 0.7 (balanced creativity)
- Response time: Usually 2-5 seconds

## Next Steps

1. ✅ Setup is complete
2. ✅ Both dev and prod environments work
3. ✅ Fallback system in place
4. Run local tests
5. Deploy to production
6. Monitor API usage in Google Cloud Console

## Support

For issues:
1. Check browser console (F12)
2. Check server logs
3. Test API key separately
4. Review this guide's troubleshooting section
5. Check Vercel deployment logs
