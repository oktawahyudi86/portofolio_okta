# Quick Deployment Guide - OktaAI Chat

## 5-Minute Setup

### Step 1: Get API Key (1 min)
```bash
# Go to https://aistudio.google.com/app/apikey
# Click "Create API Key"
# Copy the key
```

### Step 2: Add to Vercel (2 min)
1. Open https://vercel.com/dashboard
2. Select `portofolio_okta`
3. Settings → Environment Variables
4. Click "Add"
   - Name: `GEMINI_API_KEY`
   - Value: Paste your API key
   - Environments: Production
5. Click Save

### Step 3: Deploy (1 min)
```bash
git add .
git commit -m "Enable OktaAI chat"
git push origin main
```

Wait for Vercel deployment to complete. Done!

### Step 4: Test (1 min)
1. Open your site
2. Click OktaAI chat
3. Ask: "Siapa itu Okta?"
4. Should get AI response

---

## Testing Locally First (Optional)

```bash
# Create .env file with:
GEMINI_API_KEY=your_api_key_here

# Run both servers
npm run dev:all

# Open http://localhost:5173
# Test chat
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| 404 on /api/chat | Redeploy to Vercel, check build logs |
| Generic responses | Add GEMINI_API_KEY to Vercel environment |
| Slow responses | Wait 5 seconds, try again |
| CORS error | Check browser console, likely local dev issue |

---

## Files Changed

- `api/utils.js` - NEW (shared utilities)
- `api/chat.js` - FIXED (uses utilities)
- `server.js` - UPDATED (uses utilities)
- `.env.production` - NEW (template)
- `AI_CHAT_INTEGRATION.md` - NEW (full docs)

---

## What Was Fixed

1. Removed duplicate code between dev/prod
2. Fixed missing data field references
3. Added proper fallback system
4. Improved error handling
5. Made deployment-ready

---

## Architecture

```
Frontend → /api/chat → Gemini API
              ↓
          api/utils.js (shared)
              ↓
         Smart Fallback
```

---

## Is It Working?

Check these signs:

- Chat button appears ✓
- Response appears after 2-5 seconds ✓
- Fallback response if API key missing ✓
- No console errors ✓

---

## Next Actions

1. Deploy and test
2. Monitor first 24 hours
3. Enjoy your OktaAI chat!

For details, see `AI_CHAT_INTEGRATION.md`
