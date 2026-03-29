# OktaAI Production Deployment Checklist

## ✅ Pre-Deployment (Do This Before You Deploy)

### Security
- [ ] Created Gemini API key from https://aistudio.google.com/app/apikey
- [ ] Verified `.env` file is in `.gitignore` (never commit it)
- [ ] Confirmed `GEMINI_API_KEY` is NOT in any source code
- [ ] Reviewed `vite.config.ts` - API key is removed from client config
- [ ] Checked `server.js` - API key is only used on backend

### Code Quality
- [ ] Ran `npm run lint` - no TypeScript errors
- [ ] Tested locally with `npm run dev:all` - chat works
- [ ] No console.log statements with sensitive data
- [ ] All dependencies are installed (`package-lock.json` exists)

### Vercel Setup
- [ ] GitHub repository is connected to Vercel
- [ ] Vercel project created (or existing project)
- [ ] Correct repository selected in Vercel settings
- [ ] Build command is set to: `npm run build`
- [ ] Output directory is set to: `dist`

---

## 🚀 Deployment Steps

### Step 1: Add Environment Variables
1. Go to https://vercel.com/dashboard
2. Select your project: `portofolio_okta`
3. Go to **Settings → Environment Variables**
4. Add:
   - Name: `GEMINI_API_KEY`
   - Value: Your API key from Google AI Studio
   - Environments: Production, Preview
5. Click **Save**

### Step 2: Deploy
```bash
# Make sure you're on the main branch
git status

# Commit and push your changes
git add .
git commit -m "Add OktaAI with secure API key handling"
git push origin main
```

Vercel will automatically deploy! Watch the deployment in real-time.

### Step 3: Wait for Deployment
- Vercel will show you the deployment status
- Build takes ~1-2 minutes
- You'll see: "Ready [timestamp]"

### Step 4: Test Your Deployment
1. Go to your production URL (shown in Vercel)
2. Click the OktaAI chat button
3. Ask a question: "Siapa itu Okta?"
4. Should get a response from Gemini AI

---

## ✅ Post-Deployment

### Immediate Checks
- [ ] Website loads without errors
- [ ] Chat icon appears
- [ ] Can send a message
- [ ] Get a response from AI
- [ ] No API key visible in browser console/Network tab

### Monitor for Issues
- [ ] Check Vercel Deployments for any errors
- [ ] Check Vercel Logs for errors
- [ ] Check browser console for errors (F12)
- [ ] Check Network tab - `/api/chat` requests succeed

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Chat response in < 5 seconds
- [ ] No 404 errors on resources

---

## 🐛 Troubleshooting

### Issue: Chat Returns 404
**Solution:**
1. Verify `GEMINI_API_KEY` is in Vercel Environment Variables
2. Redeploy: Go to Deployments → Click latest → Redeploy
3. Wait 2 minutes
4. Try again

### Issue: "API Key is undefined"
**Solution:**
1. Check Vercel logs
2. Verify environment variable name is exactly: `GEMINI_API_KEY`
3. Verify value is your actual API key (not placeholder)
4. Redeploy after saving env vars

### Issue: Chat Works Locally But Not in Production
**Solution:**
1. Check that API key is set in Vercel (not just local `.env`)
2. Verify no typos in environment variable name
3. Check Vercel logs for detailed error message
4. Check browser Network tab to see actual error response

### Issue: Build Fails
**Solution:**
1. Check build logs in Vercel Dashboard
2. Run locally: `npm run build` to see errors
3. Fix TypeScript errors: `npm run lint`
4. Push fixes and redeploy

---

## 📊 Monitoring

### View Logs
1. Vercel Dashboard → Your Project
2. Click **Deployments** tab
3. Click active deployment
4. Click **Logs** tab
5. Search for errors

### Check Error Tracking
- Browser console (F12 on production site)
- Vercel Function Logs
- Check `/api/chat` response in Network tab

---

## 🔒 Security Verification

After deployment, verify security:

```bash
# Check 1: API key not exposed
# Open browser DevTools (F12)
# Search in Network tab for "GEMINI_API_KEY" 
# Should find NOTHING

# Check 2: API key not in HTML source
# Right click page → View Page Source
# Search for "GEMINI_API_KEY"
# Should find NOTHING

# Check 3: API calls go through /api/chat
# Open Network tab (F12)
# Send a message
# Should see POST to /api/chat
# Should NOT see Gemini API calls from browser
```

---

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ Website loads from your domain
- ✅ Chat interface appears
- ✅ Can send messages and get AI responses
- ✅ No errors in browser console
- ✅ No API key visible anywhere in browser
- ✅ Vercel logs show no errors

---

## 📞 Getting Help

If something breaks:

1. **Check Vercel Logs**
   - Deployment logs
   - Function logs
   - Build logs

2. **Check Browser Console**
   - F12 → Console tab
   - Look for error messages

3. **Check Network Tab**
   - F12 → Network tab
   - Click `/api/chat` request
   - See the response

4. **Rollback if Needed**
   - Vercel Dashboard → Deployments
   - Click a previous deployment
   - Click "Promote to Production"

---

## Deployment Completed! 🚀

Your OktaAI is now live in production with:
- ✅ Secure API key management
- ✅ Fast edge-cached frontend
- ✅ Scalable serverless backend
- ✅ Automatic HTTPS/SSL
- ✅ No sensitive data exposed

Congratulations!
