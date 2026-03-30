import express from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envFiles = ['.env.production', '.env'];

envFiles.forEach((file, index) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    dotenv.config({ path: fullPath, override: false });
  }
});

const app = express();
const distDir = path.join(__dirname, 'dist');

app.use(express.static(distDir));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/share', (req, res) => {
  res.redirect(301, '/share/');
});

app.get('/cv_oktawahyudi', (req, res) => {
  res.redirect(301, '/cv_oktawahyudi/');
});

// Fallback to index.html for SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
