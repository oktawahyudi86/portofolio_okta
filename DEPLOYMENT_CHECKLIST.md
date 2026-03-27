# Deployment Checklist - OktaAI Production

Use this checklist to ensure your deployment is production-ready.

## Pre-Deployment (Local)
- [ ] `.env` file created with `GEMINI_API_KEY`
- [ ] `.env` file is in `.gitignore` (don't commit)
- [ ] `npm install` completed successfully
- [ ] `npm run build` completes without errors
- [ ] `npm start` server starts without errors
- [ ] Test AI chat locally at `http://localhost:3000`
- [ ] Test API endpoint: `curl http://localhost:5000/api/health`

## Environment Setup
- [ ] Google Gemini API key obtained from https://aistudio.google.com/app/apikey
- [ ] API key tested and working (can make requests)
- [ ] Backup API key stored securely
- [ ] Plan for API key rotation (every 6 months)

## Code Quality
- [ ] No console.log("[v0]") debug statements in production code
- [ ] All imports are correct and necessary
- [ ] No hardcoded API keys or sensitive data in code
- [ ] TypeScript compilation passes: `npm run lint`

## Frontend Build
- [ ] `npm run build` creates `dist/` folder
- [ ] All assets load correctly in dist folder
- [ ] No build warnings or errors
- [ ] Images are optimized (in `/public/aset/`)

## Backend Setup
- [ ] `server.js` is configured correctly
- [ ] `PORT` environment variable set (or defaults to 5000)
- [ ] CORS is properly configured
- [ ] API routes are tested and working

## Choose Deployment Platform

### Option 1: Railway.app (Easiest)
- [ ] GitHub repository is public or Railway has access
- [ ] Railway project created
- [ ] Environment variables added in Railway dashboard
- [ ] `GEMINI_API_KEY` set in Railway
- [ ] Deploy successful
- [ ] Test live URL: `{your-url}/api/health`
- [ ] Test AI chat on live URL

### Option 2: Vercel
- [ ] Project connected to Vercel
- [ ] Environment variables set in Vercel dashboard
- [ ] Vercel settings configured for Node.js runtime
- [ ] Deployment successful
- [ ] Backend functions working

### Option 3: Self-Hosted Server
- [ ] Server has Node.js 16+ installed
- [ ] SSH access verified
- [ ] PM2 or equivalent process manager installed
- [ ] `.env` file created on server
- [ ] Application running: `pm2 start server.js`
- [ ] Process monitoring enabled: `pm2 save && pm2 startup`

### Option 4: Docker
- [ ] `Dockerfile` created (or use provided)
- [ ] Docker image builds successfully
- [ ] Environment variables passed to container
- [ ] Container runs without errors
- [ ] Port mapping configured (5000:5000)

## Post-Deployment Testing

### API Endpoints
```bash
# Health check
curl https://your-production-url/api/health
# Should return: {"status":"OK","message":"Server is running"}

# Test AI chat
curl -X POST https://your-production-url/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","text":"Siapa Okta?"}]}'
# Should return AI response
```

### Frontend Testing
- [ ] Visit production URL
- [ ] Page loads without errors
- [ ] "Talk With Okta AI" button appears
- [ ] Click button and test AI chat
- [ ] All carousels work (projects, testimonials)
- [ ] Navigation works properly
- [ ] Mobile responsive design works
- [ ] Images load correctly

### Performance Testing
- [ ] Page Load Time < 3 seconds
- [ ] First Contentful Paint < 1.5 seconds
- [ ] AI response time < 5 seconds
- [ ] No console errors in browser

## Monitoring & Logging

### Set Up Logging
- [ ] Server logs monitored: `pm2 logs` or provider logs
- [ ] Error tracking enabled (optional: Sentry.io)
- [ ] API request logging active
- [ ] Rate limiting implemented (optional)

### Set Up Alerts
- [ ] Uptime monitoring enabled (optional: StatusPage, UptimeRobot)
- [ ] Email alerts for errors configured
- [ ] API quota monitoring set up
- [ ] Daily/weekly performance reports enabled

## Security Checklist

- [ ] API key never exposed in client-side code ✓
- [ ] CORS properly restricted (no `*` unless necessary)
- [ ] `.env` file not committed to Git ✓
- [ ] Production API key different from development
- [ ] API key rotation scheduled
- [ ] HTTPS/SSL enabled on custom domain
- [ ] No sensitive data in logs
- [ ] Rate limiting implemented on API

## Documentation

- [ ] README.md updated with deployment instructions
- [ ] AI_SETUP.md created with full guide ✓
- [ ] QUICK_START.md created for quick reference ✓
- [ ] API endpoints documented
- [ ] Environment variables documented
- [ ] Troubleshooting guide available

## Final Checks

- [ ] Production URL working correctly
- [ ] All features functional on production
- [ ] Performance acceptable
- [ ] No breaking errors in console
- [ ] Database/API connections stable
- [ ] Backup plan in case of failure
- [ ] Team knows how to handle incidents
- [ ] Rollback procedure documented

## Post-Launch

- [ ] Monitor for 24-48 hours
- [ ] Check error logs daily for first week
- [ ] Gather user feedback
- [ ] Performance monitoring ongoing
- [ ] Plan for scaling if needed
- [ ] Schedule API key rotation
- [ ] Plan next improvements

---

## Support Contacts

**For Gemini API Issues:**
- Visit: https://ai.google.dev/docs
- Support: https://issuetracker.google.com/issues?q=componentid:187193

**For Railway Deployment:**
- Docs: https://docs.railway.app
- Status: https://status.railway.app

**For Vercel Deployment:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

---

**Status**: ⬜ Not Started | 🟨 In Progress | ✅ Complete
