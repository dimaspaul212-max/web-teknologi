# UTS Web Teknologi - Login + Logout (Next.js + PostgreSQL)

**Nama:** Dimas Malik
**NIM:** 3420230025

Form login autentikasi (NextAuth.js v5) yang terhubung ke database PostgreSQL, dengan fitur logout.

## Foto latar kampus
Simpan foto kampus (tanpa navbar/teks) dengan nama **`campus-hero.jpg`** di folder `public/`.
Jika belum ada, latar otomatis memakai gradasi biru-hijau.

## Halaman
`/` Home, `/about`, `/projects`, `/contact`, `/login`, `/dashboard` (wajib login).

## Jalankan di laptop (terminal VS Code, folder yang berisi package.json)
```
npm install
npm run setup      # membuat .env + AUTH_SECRET otomatis
```
Buka `.env`, isi `DATABASE_URL`, simpan (Ctrl+S). Lalu:
```
npm run seed       # membuat tabel users + akun login
npm run dev        # buka http://localhost:3000
```
Login: `admin@uia.ac.id` / `Rahasia123`

## Isi DATABASE_URL
- Lokal (PostgreSQL dari P05): `postgresql://postgres:PASSWORD@localhost:5432/postgres`
- Untuk dikumpulkan (Vercel): wajib database cloud, misalnya Postgres paket Free
  (Neon / Vercel Storage). Pakai connection string yang ada `-pooler`.

## GitHub & Vercel
`.env` tidak boleh ikut ter-push (sudah ada di .gitignore). Di Vercel, tambahkan
Environment Variables `DATABASE_URL` dan `AUTH_SECRET` (buat baru dengan `npm run setup`), lalu deploy.
