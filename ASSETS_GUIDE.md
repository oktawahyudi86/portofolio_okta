# Panduan Mengganti Gambar (Assets Guide)

Semua gambar portfolio Anda disimpan di folder `/public/aset/`. Untuk mengganti gambar, ikuti langkah-langkah berikut:

## Gambar Project

### 1. Website Business MRT Jakarta
- **File:** `/public/aset/project-mrt-jakarta.webp`
- **Ukuran Rekomendasi:** 1200x800px
- **Format:** WebP
- **Digunakan di:** Bagian Portfolio, Project card pertama

### 2. Yulo Laundry Mobile App
- **File:** `/public/aset/project-yulo-laundry.svg`
- **Ukuran Rekomendasi:** 1200x800px
- **Format:** SVG
- **Digunakan di:** Bagian Portfolio, Project card kedua

### 3. Dazo Apps & Cha AI
- **File:** `/public/aset/project-dazo-ai.svg`
- **Ukuran Rekomendasi:** 1200x800px
- **Format:** SVG
- **Digunakan di:** Bagian Portfolio, Project card ketiga

## Gambar Testimonial

### 1. Budi Santoso
- **File:** `/public/aset/testimonial-budi.webp`
- **Ukuran Rekomendasi:** 150x150px
- **Format:** WebP
- **Digunakan di:** Bagian Testimonial

### 2. Siti Nurhaliza
- **File:** `/public/aset/testimonial-siti.webp`
- **Ukuran Rekomendasi:** 150x150px
- **Format:** WebP
- **Digunakan di:** Bagian Testimonial

### 3. Ahmad Prasetyo
- **File:** `/public/aset/testimonial-ahmad.webp`
- **Ukuran Rekomendasi:** 150x150px
- **Format:** WebP
- **Digunakan di:** Bagian Testimonial

## Profil Foto
- **File:** `/public/aset/profil-hero-new.webp`
- **Ukuran Rekomendasi:** 400x400px
- **Format:** WebP (dengan transparansi)
- **Digunakan di:** Hero section, bagian atas portfolio

## Cara Mengganti Gambar

1. **Upload file baru** ke folder `/public/aset/` dengan nama yang sama dengan file yang dipakai
2. **Refresh browser** (Ctrl+F5 atau Cmd+Shift+R) untuk clear cache
3. Gambar baru akan langsung muncul

## Catatan Penting

- Pastikan nama file sama persis (case-sensitive)
- Utamakan format WebP untuk gambar raster agar loading lebih cepat
- Gunakan SVG untuk ilustrasi/vector yang memang sudah tersedia dalam format tersebut
- Optimasi ukuran file sebelum upload untuk loading lebih cepat
- Tidak perlu mengubah kode di `src/App.tsx` saat mengganti gambar

## Tools Untuk Optimasi Gambar

- **TinyPNG** (tinypng.com) - Kompresi PNG dan JPG
- **ImageOptim** (imageoptim.com) - Optimasi offline
- **Figma** - Resize dan export gambar dengan kualitas baik
