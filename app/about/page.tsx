import { MAHASISWA } from '@/lib/identitas';
import { Card, AccentBars } from '@/app/components/ui';

export const metadata = { title: `About - ${MAHASISWA.tugas}` };

export default function AboutPage() {
  return (
    <Card>
      <AccentBars />
      <h1 className="text-4xl font-extrabold tracking-tight text-uia-navy">
        Tentang <span className="text-uia-blue">Proyek</span>
      </h1>
      <p className="mt-5 leading-relaxed text-slate-700">
        Proyek ini adalah tugas UTS {MAHASISWA.matkul}: aplikasi web dengan form login yang
        terhubung ke database PostgreSQL, lengkap dengan fitur logout.
      </p>
      <ul className="mt-5 space-y-2 text-slate-700">
        <li>Next.js 15 (App Router) sebagai kerangka aplikasi</li>
        <li>NextAuth.js v5 untuk autentikasi</li>
        <li>PostgreSQL di Vercel (Neon) untuk menyimpan akun</li>
        <li>Tailwind CSS untuk tampilan</li>
      </ul>
    </Card>
  );
}
