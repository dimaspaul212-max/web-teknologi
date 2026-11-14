// Membuat tabel users dan satu akun login. Aman dijalankan berulang kali.
import pg from 'pg';
import bcrypt from 'bcryptjs';

const {
  DATABASE_URL,
  SEED_NAME = 'Dimas Malik',
  SEED_EMAIL = 'admin@uia.ac.id',
  SEED_PASSWORD = 'Rahasia123',
} = process.env;

if (!DATABASE_URL) {
  console.error('DATABASE_URL belum diisi. Buka file .env, isi, simpan, lalu jalankan lagi.');
  process.exit(1);
}

const isLocal = /@(localhost|127\.0\.0\.1)/.test(DATABASE_URL);
const client = new pg.Client({
  connectionString: DATABASE_URL,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

try {
  await client.connect();
  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `);
  const hash = await bcrypt.hash(SEED_PASSWORD, 10);
  await client.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
     ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name, password = EXCLUDED.password`,
    [SEED_NAME, SEED_EMAIL, hash],
  );
  console.log('Berhasil. Akun siap dipakai:');
  console.log(`  email    : ${SEED_EMAIL}`);
  console.log(`  password : ${SEED_PASSWORD}`);
} catch (err) {
  console.error('Gagal terhubung/menulis ke database:', err.message);
  process.exitCode = 1;
} finally {
  await client.end().catch(() => {});
}
