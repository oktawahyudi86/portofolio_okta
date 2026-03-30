import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const siteUrl = (env.VITE_SITE_URL || 'https://oktawahyu.web.id').replace(/\/$/, '');
  const vercelSiteUrl = (env.VITE_VERCEL_SITE_URL || 'https://oktawahyu.vercel.app').replace(/\/$/, '');
  const ogImageUrl = `${siteUrl}/aset/og-preview.webp?v=20260330-1`;

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'inject-site-url-meta',
        transformIndexHtml(html) {
          return html
            .replace(/%SITE_URL%/g, siteUrl)
            .replace(/%VERCEL_SITE_URL%/g, vercelSiteUrl)
            .replace(/%OG_IMAGE_URL%/g, ogImageUrl);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
