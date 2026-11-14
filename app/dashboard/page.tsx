import { auth } from '@/auth';
import { pool } from '@/lib/db';
import { MAHASISWA } from '@/lib/identitas';
import { Card, AccentBars } from '@/app/components/ui';

async function hitungUser(): Promise<number | null> {
  try {
    const { rows } = await pool.query('SELECT COUNT(*)::int AS total FROM users');
    return rows[0].total as number;
  } catch {
    return null;
  }
}

export default async function DashboardPage() {
  const session = await auth();
  const total = await hitungUser();

  const baris: [string, React.ReactNode][] = [
    ['Nama', MAHASISWA.nama],
    ['NIM', MAHASISWA.nim],
    ['Email login', session?.user?.email],
    [
      'Database',
      total === null ? (
        <span className="text-red-600">Tidak terhubung</span>
      ) : (
        <span className="text-green-700">Terhubung ({total} akun terdaftar)</span>
      ),
    ],
  ];

  return (
    <Card wide>
      <AccentBars />
      <h1 className="text-4xl font-extrabold tracking-tight text-uia-navy">
        Halo, <span className="text-uia-blue">{session?.user?.name}</span>
      </h1>
      <p className="mt-3 text-sm text-slate-700">
        Anda berhasil masuk. Halaman ini hanya bisa dibuka setelah login. Klik Logout di pojok kanan
        atas untuk keluar.
      </p>

      <dl className="mt-6 divide-y divide-slate-300/70 text-sm">
        {baris.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-3">
            <dt className="text-slate-600">{k}</dt>
            <dd className="text-right font-semibold text-uia-navy">{v}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
