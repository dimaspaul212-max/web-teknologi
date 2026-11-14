import { MAHASISWA } from '@/lib/identitas';
import { Card, AccentBars } from '@/app/components/ui';

export const metadata = { title: `Contact - ${MAHASISWA.tugas}` };

export default function ContactPage() {
  const baris = [
    ['Nama', MAHASISWA.nama],
    ['NIM', MAHASISWA.nim],
    ['Program studi', MAHASISWA.prodi],
    ['Kampus', MAHASISWA.kampus],
    ['Mata kuliah', MAHASISWA.matkul],
  ];

  return (
    <Card>
      <AccentBars />
      <h1 className="text-4xl font-extrabold tracking-tight text-uia-navy">
        Info <span className="text-uia-blue">Pembuat</span>
      </h1>
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
