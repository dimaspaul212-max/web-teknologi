import { MAHASISWA } from '@/lib/identitas';
import { Card, AccentBars } from '@/app/components/ui';

export const metadata = { title: `Projects - ${MAHASISWA.tugas}` };

const FITUR = [
  ['Login', 'Email dan kata sandi dicek ke tabel users di database.'],
  ['Logout', 'Mengakhiri sesi dan kembali ke halaman login.'],
  ['Dashboard terproteksi', 'Hanya bisa dibuka setelah login, dijaga oleh middleware.'],
  ['Kata sandi aman', 'Disimpan dalam bentuk hash bcrypt, bukan teks asli.'],
];

export default function ProjectsPage() {
  return (
    <Card wide>
      <AccentBars />
      <h1 className="text-4xl font-extrabold tracking-tight text-uia-navy">
        Fitur <span className="text-uia-blue">Aplikasi</span>
      </h1>
      <dl className="mt-6 divide-y divide-slate-300/70">
        {FITUR.map(([judul, isi]) => (
          <div key={judul} className="py-4">
            <dt className="font-bold text-uia-navy">{judul}</dt>
            <dd className="mt-1 text-sm text-slate-700">{isi}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
