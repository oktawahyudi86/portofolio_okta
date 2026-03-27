# Quick Start - OktaAI Setup

## 5 Minutes Setup

### 1. Get Free Gemini API Key (2 minutes)
```bash
# Go to this link and create API key
https://aistudio.google.com/app/apikey

# Copy your API key
```

### 2. Setup Local Environment (1 minute)
```bash
# Create .env file
echo "GEMINI_API_KEY=paste_your_key_here" > .env
```

### 3. Install & Run (2 minutes)
```bash
# Install dependencies
npm install

# Run everything
npm run dev:all
```

✅ Done! Open http://localhost:3000 and test the AI chat

---

## Production in 10 Minutes

### Deploy to Railway (Recommended)
1. Push code to GitHub
2. Go to [Railway.app](https://railway.app)
3. Click "New Project" → Select your GitHub repo
4. Go to Variables tab → Add `GEMINI_API_KEY=your_key`
5. Deploy → Done! Railway gives you a live URL

**Your app is live!** Railway auto-deploys on every push.

---

## Minimal Commands Reference

```bash
# Local Development
npm run dev:all          # Run frontend + backend together

# Production Build
npm run build            # Build frontend only
npm start                # Start backend server

# Separate Terminals
npm run dev              # Frontend on port 3000
npm run dev:server       # Backend on port 5000

# Health Check
curl http://localhost:5000/api/health
```

---

## Common Issues

| Issue | Fix |
|-------|-----|
| "GEMINI_API_KEY not found" | Check `.env` file has the key |
| CORS Error | Make sure backend is running on port 5000 |
| AI not responding | Check API key is valid, API quota not exceeded |

---

**Next**: Read `AI_SETUP.md` for detailed guide and advanced deployment options
