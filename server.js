import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const distDir = path.join(__dirname, 'dist');
const indexFile = path.join(distDir, 'index.html');

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' https://www.google.com https://www.gstatic.com",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://www.google.com https://www.gstatic.com",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "frame-src https://www.google.com https://recaptcha.google.com",
  "child-src https://www.google.com https://recaptcha.google.com",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = {
  'Content-Security-Policy': contentSecurityPolicy,
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-DNS-Prefetch-Control': 'off',
  'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Origin-Agent-Cluster': '?1',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Permitted-Cross-Domain-Policies': 'none',
};

app.disable('x-powered-by');

app.use((req, res, next) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (!['GET', 'HEAD'].includes(req.method)) {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return next();
});

app.use(express.static(distDir, {
  dotfiles: 'ignore',
  index: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }

    if (filePath.endsWith(`${path.sep}.well-known${path.sep}security.txt`)) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
    }
  },
}));

app.get('/api/health', (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/share', (req, res) => {
  res.redirect(301, '/share/');
});

app.get('*', (req, res) => {
  const requestPath = req.path || '/';
  const baseName = path.posix.basename(requestPath);

  if (baseName.startsWith('.') || baseName.includes('.')) {
    return res.status(404).type('text/plain').send('Not found');
  }

  return res.sendFile(indexFile);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
