# OktaAI Setup & Deployment Guide

## Overview
OktaAI adalah chatbot virtual yang terintegrasi dengan portfolio Okta Wahyudi. Chatbot ini menggunakan Google Gemini API untuk memberikan respons yang intelligent tentang pengalaman, project, dan skill Okta.

## Architecture
- **Frontend**: React + Vite (Client-side UI)
- **Backend**: Express.js (API Server)
- **AI Model**: Google Gemini 2.0 Flash
- **Deployment**: Can be deployed on Vercel, Railway, Heroku, or any Node.js hosting

---

## Local Development Setup

### 1. Get Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy your API key

### 2. Setup Environment
```bash
# Copy example env file
cp .env.example .env

# Edit .env and add your Gemini API Key
GEMINI_API_KEY=your_key_here
```

### 3. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 4. Run Development Mode

**Option A: Run Both Frontend & Backend**
```bash
npm run dev:all
```
This runs:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

**Option B: Run Separately (in different terminals)**
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
npm run dev:server
```

### 5. Test the AI Chat
1. Open http://localhost:3000
2. Click "Talk With Okta AI" button
3. Type a message and send

---

## Production Deployment

### Option 1: Deploy on Vercel (Recommended)

#### Step 1: Build the App
```bash
npm run build
```

#### Step 2: Setup Vercel Project
```bash
# If not already set up
vercel

# Or use GitHub integration in Vercel dashboard
```

#### Step 3: Add Environment Variables
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add `GEMINI_API_KEY` with your API key value
3. Make sure it's added to Production, Preview, and Development environments

#### Step 4: Configure vercel.json (if needed)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "GEMINI_API_KEY": "@gemini_api_key"
  }
}
```

**Note**: Vercel serverless functions have limitations. For a full Node.js backend, use the "Vercel Node.js Runtime" or consider other hosting options.

### Option 2: Deploy on Railway

#### Step 1: Connect GitHub
1. Go to [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository

#### Step 2: Add Environment Variables
1. In Railway dashboard → Variables
2. Add `GEMINI_API_KEY=your_key_here`

#### Step 3: Configure Start Command
In Railway → Settings → Start Command:
```bash
npm run build && npm start
```

#### Step 4: Deploy
Railway auto-deploys on push to main branch

### Option 3: Deploy on Heroku (Deprecated but still works)

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Add environment variable
heroku config:set GEMINI_API_KEY=your_key_here

# Deploy
git push heroku main
```

### Option 4: Deploy on Your Own Server

#### Requirements
- Node.js 16+ installed
- PM2 or similar for process management (optional but recommended)

#### Steps
```bash
# SSH into server
ssh user@your-server.com

# Clone repository
git clone https://github.com/oktawahyudi86/portofolio_okta.git
cd portofolio_okta

# Install dependencies
npm install

# Build frontend
npm run build

# Create .env file
echo "GEMINI_API_KEY=your_key_here" > .env

# Run with PM2
npm install -g pm2
pm2 start server.js --name "okta-portfolio"
pm2 startup
pm2 save

# Check status
pm2 status
```

---

## API Endpoints

### POST /api/chat
Send a message and get AI response

**Request:**
```json
{
  "messages": [
    { "role": "user", "text": "Siapa itu Okta?" },
    { "role": "ai", "text": "..." }
  ]
}
```

**Response:**
```json
{
  "text": "Okta Wahyudi adalah seorang Full Stack Developer..."
}
```

### GET /api/health
Check server health

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

## Troubleshooting

### Issue: "GEMINI_API_KEY is not configured"
**Solution**: Make sure `GEMINI_API_KEY` is set in your `.env` file

### Issue: CORS Error
**Solution**: Backend CORS is already configured. If still getting errors:
- Check that both frontend and backend are running
- Verify frontend is calling `http://localhost:5000/api/chat` (or your backend URL)

### Issue: AI Not Responding
**Solution**: 
1. Check Gemini API quota (free tier has limits)
2. Verify API key is valid
3. Check server logs: `pm2 logs okta-portfolio`

### Issue: Frontend Built Successfully but Backend API Not Working
**Solution**: Make sure to run `npm start` or `npm run dev:server` after building

---

## API Key Limits & Quotas

### Google Gemini Free Tier (Generous)
- **Rate Limit**: 60 requests per minute
- **Quota**: 1,000 requests per day
- **Max Tokens**: 2M tokens per minute

For production with higher traffic:
- Upgrade to paid tier
- Monitor usage in [Google Cloud Console](https://console.cloud.google.com)
- Set up billing alerts

---

## Security Best Practices

1. **Never commit .env file** ✅ Already in .gitignore
2. **Rotate API keys regularly** - Generate new keys every 3-6 months
3. **Use environment variables** - Never hardcode API keys
4. **Rate limiting** - Consider adding rate limiting for API calls
5. **CORS configuration** - Review and restrict origins if needed

---

## Monitoring & Logging

### Local Development
```bash
# View frontend logs
npm run dev  # Check browser console

# View backend logs
npm run dev:server  # Check terminal output
```

### Production (with PM2)
```bash
# View logs
pm2 logs okta-portfolio

# Real-time monitoring
pm2 monit

# Save logs to file
pm2 logs okta-portfolio > app.log
```

---

## Next Steps

1. ✅ Get Gemini API Key from [AI Studio](https://aistudio.google.com/app/apikey)
2. ✅ Setup local development environment
3. ✅ Test AI chat locally
4. ✅ Deploy to your chosen platform
5. ✅ Monitor API usage and logs
6. ✅ Update portfolio context in `server.js` as needed

---

## Support & Resources

- [Google Gemini API Docs](https://ai.google.dev/docs)
- [Express.js Docs](https://expressjs.com)
- [Vercel Deployment](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
