# Development Guide

## Local workflow

Gunakan `npm run dev` untuk mengerjakan tampilan dan konten portfolio. Vite akan menyajikan file dari `src/` dan `public/` secara langsung.

Kalau ingin mengecek perilaku production route seperti `/share` atau `/cv_oktawahyudi`, jalankan:

```bash
npm run build
npm start
```

## Quality checks

- `npm run lint` untuk memastikan TypeScript tetap sehat
- `npm run build` untuk memastikan bundle production berhasil dibuat

## Catatan struktur

- `src/App.tsx` berisi halaman utama dan route ringan untuk privacy/terms
- `public/aset` menyimpan gambar portfolio
- `public/share` dan `public/cv_oktawahyudi` menyimpan halaman statis tambahan
- `server.js` hanya menangani static serving, health check, dan redirect route utilitas
