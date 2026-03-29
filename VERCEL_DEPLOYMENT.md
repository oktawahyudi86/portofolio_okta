# Vercel Production Deployment Guide - OktaAI

## Quick Start - Deploy in 5 Minutes

### Step 1: Get Your Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the generated key (keep it secret!)

### Step 2: Add Environment Variables to Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add a new variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Paste your Gemini API key
   - **Environments**: Select "Production" and "Preview"
4. Click "Save"

### Step 3: Deploy
Simply push to your GitHub repository or redeploy from Vercel dashboard:
```bash
git push origin main
```

Your app will automatically deploy with the secure API key.

---

## Architecture for Production

```
┌─────────────────────────────────────────────────────────┐
│                    YOUR USERS                           │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│            Vercel Edge Network (CDN)                    │
│    Serves your React frontend from edge locations       │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│       React Frontend (Built with Vite)                  │
│    - OktaAI Component                                   │
│    - Chat Interface                                     │
│    - Sends messages to /api/chat                        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│      Vercel Serverless Function (Node.js)               │
│    /api/chat endpoint                                   │
│    - Receives user message                              │
│    - Gets GEMINI_API_KEY from environment               │
│    - Calls Google Gemini API                            │
│    - Returns response to frontend                       │
│    - API key NEVER exposed to client                    │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│           Google Gemini API                             │
│    - Only backend calls this with API key               │
│    - Returns AI response                                │
└─────────────────────────────────────────────────────────┘
```

---

## How the Build Process Works

When you deploy to Vercel:

1. **Build Phase**:
   ```bash
   npm run build
   ```
   - Vite builds your React frontend
   - Creates optimized `dist/` folder
   - Server.js is included for API endpoints

2. **Runtime**:
   - Frontend files served from CDN
   - `/api/*` routes handled by serverless functions
   - Environment variables injected at runtime
   - API key accessible only in server.js (never in browser)

---

## Troubleshooting

### Chat Not Working (404 on /api/chat)
- Check that `GEMINI_API_KEY` is added in Vercel Settings
- Check the deployment logs in Vercel Dashboard
- Verify the API key is valid

### "API Key is undefined" Error
- Make sure you've added `GEMINI_API_KEY` to Environment Variables
- Wait 1-2 minutes after adding the variable
- Re-deploy your app

### Build Fails
- Check the build logs in Vercel Dashboard
- Ensure `npm install` completed successfully
- Check for TypeScript errors: `npm run lint`

---

## Environment Variables Reference

### Required for Production:
- `GEMINI_API_KEY` - Your Google Gemini API key (from Google AI Studio)

### Optional:
- `VITE_SITE_URL` - Your site URL (defaults to https://oktawahyu.web.id)

---

## Security Checklist

Before going live, verify:

- [ ] `GEMINI_API_KEY` is added to Vercel Environment Variables
- [ ] `.env` file is in `.gitignore` (never commit secrets)
- [ ] API key is not logged in console
- [ ] CORS is properly configured
- [ ] API key restrictions set in Google Cloud Console (optional but recommended)

---

## Monitoring & Logs

### View Deployment Logs:
1. Go to Vercel Dashboard
2. Click your project
3. Go to **Deployments** tab
4. Click the deployment you want to check
5. View **Logs** tab

### View Runtime Logs:
1. Go to **Deployments** → Your active deployment
2. Click **Logs** tab
3. Filter by endpoint (e.g., `/api/chat`)

---

## Scaling & Performance

Vercel automatically:
- Scales your API endpoints based on traffic
- Caches your frontend at edge locations
- Handles SSL/HTTPS
- Provides automatic deployments on push

No additional configuration needed for production!

---

## Custom Domain

To use your own domain:

1. In Vercel Dashboard → Project Settings → Domains
2. Add your domain (e.g., `oktawahyu.web.id`)
3. Follow Vercel's DNS configuration steps
4. DNS changes take effect in 24-48 hours

---

## Next Steps

1. Deploy to Vercel
2. Test the chat at your production domain
3. Monitor logs for any errors
4. Celebrate! 🎉

Your OktaAI is now live and secure! 🚀
