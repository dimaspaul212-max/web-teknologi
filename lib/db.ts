import { Pool } from 'pg';

const url = process.env.DATABASE_URL;
const isLocal = !!url && /@(localhost|127\.0\.0\.1)/.test(url);

// Simpan pool di globalThis agar tidak dibuat berulang saat hot-reload.
const globalForPg = globalThis as unknown as { pgPool?: Pool };

export const pool =
  globalForPg.pgPool ??
  new Pool({
    connectionString: url,
    ssl: isLocal ? false : { rejectUnauthorized: false }, // database cloud wajib SSL
    max: 5,
  });

if (process.env.NODE_ENV !== 'production') globalForPg.pgPool = pool;
