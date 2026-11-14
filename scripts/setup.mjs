// Membuat file .env dari .env.example + AUTH_SECRET acak.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { randomBytes } from 'node:crypto';

if (existsSync('.env')) {
  console.log('File .env sudah ada, tidak diubah.');
  process.exit(0);
}

const secret = randomBytes(32).toString('base64');
const isi = readFileSync('.env.example', 'utf8').replace(
  /^AUTH_SECRET=.*$/m,
  `AUTH_SECRET=${secret}`,
);
writeFileSync('.env', isi);
console.log('File .env dibuat. Sekarang buka .env dan isi DATABASE_URL, lalu simpan (Ctrl+S).');
