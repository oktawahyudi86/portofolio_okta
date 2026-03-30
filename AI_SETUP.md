# OktaAI Setup & Deployment Guide

## Overview

OktaAI is an intelligent assistant integrated into Okta's portfolio that answers questions about his professional experience, projects, skills, and background. It works in both development and production environments with graceful fallback when API key is unavailable.

## Architecture

### Development Environment (npm run dev)

```
┌─────────────────────────────────────────────────────────────┐
│ npm run dev (concurrently)                                  │
├──────────────────────┬──────────────────────────────────────┤
│ Vite Dev Server      │ Node.js API Server                   │
│ Port: 5173          │ Port: 3000                           │
│                      │                                      │
│ React Frontend       │ server.js handler                    │
│ + HMR               │ - Validates requests                 │
│                      │ - Checks GEMINI_API_KEY             │
│                      │ - Calls Gemini API or fallback      │
│                      │ - Returns JSON response             │
│                      │                                      │
│ Proxy: /api/* →      │                                      │
│ localhost:3000       │                                      │
└──────────────────────┴──────────────────────────────────────┘
```

### Production Environment (Vercel)

```
┌──────────────────────────────────────────────────────────────┐
│ Vercel Deployment                                            │
├──────────────────────┬───────────────────────────────────────┤
│ Static Files (dist/) │ Serverless Functions (/api)          │
│                      │                                      │
│ React App            │ api/chat.js                          │
│ - dist/index.html    │ - Runs on every request             │
│ - dist/*.js          │ - Cold starts: ~1-2s                │
│ - dist/*.css         │ - Warm: <100ms                      │
│ - dist/CV_*.pdf      │ - Memory: 512MB                     │
│                      │ - Timeout: 30s                      │
│                      │ - Uses GEMINI_API_KEY from env vars  │
└──────────────────────┴───────────────────────────────────────┘
```

## Setup Instructions

### 1. Get Google Gemini API Key

1. Go to: https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Choose your project or create a new one
4. Copy the API key

### 2. Development Setup

#### Option A: With GEMINI_API_KEY (Full AI Features)

```bash
# 1. Create .env file
cp .env.example .env

# 2. Add your Gemini API key to .env
echo "GEMINI_API_KEY=your_key_here" >> .env

# 3. Start development with concurrent servers
npm run dev

# Frontend: http://localhost:5173
# API: http://localhost:3000/api/chat
```

#### Option B: Without GEMINI_API_KEY (Graceful Fallback)

```bash
# 1. Just run dev - AI will use local fallback responses
npm run dev

# The app works fully, but AI uses pre-configured Okta data instead of Gemini
```

### 3. Production Setup on Vercel

#### Step 1: Deploy to Vercel

```bash
# Push code to GitHub first
git add .
git commit -m "AI setup complete"
git push origin main
```

#### Step 2: Add Environment Variable on Vercel

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add new variable:
   - Name: `GEMINI_API_KEY`
   - Value: `[Your Gemini API Key]`
   - Select: Production
5. Redeploy the project

#### Step 3: Verify Deployment

```bash
# Test the API endpoint
curl https://your-vercel-domain.com/api/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "text": "Siapa Okta?"}]}'

# Expected response:
# {
#   "text": "Okta Wahyudi adalah IT Project Manager...",
#   "fallback": false,
#   "provider": "gemini"
# }
```

## Testing Guide

### Test 1: Development Environment (npm run dev)

```bash
# Start dev mode
npm run dev

# Wait for both servers to start:
# [v0] Server running on http://localhost:3000
# > VITE v... ready in ... ms
# > Local: http://localhost:5173

# Test the frontend
# 1. Open http://localhost:5173
# 2. Click the OktaAI chat button
# 3. Ask: "Siapa Okta Wahyudi?"
# 4. Should see response (either from Gemini or fallback)

# Test the API directly
curl http://localhost:3000/api/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "text": "What are Oktas skills?"}]}'
```

### Test 2: Production Build Locally (npm run prod)

```bash
# Build and serve production locally
npm run prod

# Should see:
# dist/ folder created
# Server running on http://localhost:3000

# Visit http://localhost:3000 and test the chat
```

### Test 3: Vercel Production Deployment

```bash
# After deploying to Vercel, test the API
curl https://your-vercel-domain.com/api/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "text": "Oktas projects?"}]}'

# Should see:
# {
#   "text": "Beberapa project utama yang pernah ditangani Okta...",
#   "fallback": false,
#   "provider": "gemini"
# }
```

## Environment Variables

### GEMINI_API_KEY (Required for Full AI)

- **Where used**: Both server.js and api/chat.js
- **Visibility**: Server-side only (never exposed to browser)
- **When missing**: System gracefully falls back to local responses
- **Production**: Set via Vercel Dashboard → Environment Variables

### VITE_SITE_URL (Optional)

- **Default**: https://oktawahyu.web.id
- **Used for**: Meta tags, canonical URLs, Open Graph
- **Override**: Set in .env file

### PORT (Optional)

- **Default**: 3000
- **Used in**: server.js only
- **Overrides**: `process.env.PORT` or `.env`

## Troubleshooting

### Issue: "Server not running on port 3000" during npm run dev

**Cause**: The Vite dev server can't connect to the API server

**Solution**:
```bash
# Make sure both processes started
# You should see two log lines like:
# [v0] Server running on http://localhost:3000
# > VITE v... ready in ... ms

# If you only see the Vite line, try:
npm run dev:server  # In separate terminal
npm run dev:vite    # In another terminal
```

### Issue: "GEMINI_API_KEY is not set" message

**Cause**: No API key configured, which is fine!

**Solution**:
- This is expected behavior - the system falls back to local responses
- To enable Gemini AI: Add `GEMINI_API_KEY` to .env (dev) or Vercel env vars (production)

### Issue: API returns 500 error

**Check**:
```bash
# 1. Is the API key valid?
# 2. Has API quota been exceeded? (429 error)
# 3. Check server logs for detailed error

# In production:
# Vercel Dashboard → Logs → Function logs
```

### Issue: Frontend chat doesn't send messages

**Check**:
```bash
# 1. Is the API endpoint reachable?
curl http://localhost:3000/api/chat

# 2. Check browser DevTools → Network tab
# Should show POST request to /api/chat

# 3. Check server logs for validation errors
```

## Performance Notes

### Development

- **First load**: ~2-3 seconds (both servers starting)
- **HMR refresh**: <200ms (hot module replacement)
- **API response**: ~1-2s with Gemini, <50ms with fallback

### Production (Vercel)

- **Cold start** (first request after deploy): ~1-2s
- **Warm requests**: <100ms
- **Gemini API latency**: 500-2000ms depending on API availability
- **Cached responses**: Instant (browser cache)

## API Response Format

### Success Response

```json
{
  "text": "Response text from Gemini or fallback",
  "fallback": false,
  "provider": "gemini"
}
```

### Fallback Response (no API key)

```json
{
  "text": "Local response based on Okta data",
  "fallback": true,
  "provider": "local"
}
```

### Error Response (API error)

```json
{
  "text": "Maaf, ada masalah saat memproses pertanyaan Anda",
  "fallback": true,
  "provider": "local",
  "error": "quota_exceeded" or "ai_request_failed"
}
```

## Files Modified for AI Integration

- **server.js** - Updated with improved error handling and structured chat logic
- **api/chat.js** - Refactored as Vercel serverless function
- **api/utils.js** - No changes (utilities already framework-agnostic)
- **package.json** - Added concurrent dev scripts using `concurrently`
- **.env.example** - Enhanced documentation
- **vercel.json** - Added function configuration
- **vite.config.ts** - Already properly configured with proxy

## Next Steps

1. Get GEMINI_API_KEY from https://aistudio.google.com/app/apikey
2. Create `.env` file: `cp .env.example .env`
3. Add your API key to `.env`
4. Run development: `npm run dev`
5. Test the chat functionality
6. Deploy to Vercel
7. Add GEMINI_API_KEY to Vercel environment variables
8. Monitor production logs

## Support & Resources

- **Gemini API Docs**: https://ai.google.dev/docs
- **Vercel Docs**: https://vercel.com/docs
- **Concurrently npm**: https://www.npmjs.com/package/concurrently
