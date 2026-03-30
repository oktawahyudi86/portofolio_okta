# Okta Portfolio

Website portfolio untuk Okta Wahyudi yang dibangun dengan React, Vite, Tailwind CSS, dan Express untuk serving hasil build production.

## Menjalankan project

1. Install dependency:
   `npm install`
2. Jalankan mode development:
   `npm run dev`
3. Build production:
   `npm run build`
4. Jalankan hasil build:
   `npm start`

## Environment variables

Salin `.env.example` lalu sesuaikan bila perlu:

```bash
VITE_SITE_URL=https://oktawahyu.web.id
PORT=3000
```

## Script yang tersedia

- `npm run dev` untuk Vite dev server
- `npm run build` untuk build production
- `npm run preview` untuk preview hasil build via Vite
- `npm start` untuk menjalankan Express server yang menyajikan folder `dist`
- `npm run lint` untuk type-check TypeScript
- `npm run clean` untuk menghapus folder `dist`

## Struktur penting

- `src/` komponen React utama
- `public/` asset publik, halaman share, dan file CV
- `server.js` server Express untuk mode production/local preview
- `vercel.json` rewrite static route untuk deployment Vercel
