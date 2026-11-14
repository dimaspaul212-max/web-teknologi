import { auth } from '@/auth';
import { MAHASISWA } from '@/lib/identitas';
import { Card, AccentBars, LinkButton } from '@/app/components/ui';

export default async function Home() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <Card>
      <AccentBars />
      <h1 className="text-4xl font-extrabold tracking-tight text-uia-navy md:text-5xl">
        Selamat <span className="text-uia-blue">Datang!</span>
      </h1>
      <p className="mt-5 leading-relaxed text-slate-700">
        Ini adalah situs web pembelajaran{' '}
        <strong className="text-uia-blue">Mata Kuliah {MAHASISWA.matkul}</strong>, Dosen Pengajar{' '}
        <strong className="text-uia-navy">{MAHASISWA.dosen}</strong>
      </p>
      {isLoggedIn ? (
        <LinkButton href="/dashboard">Buka Dashboard</LinkButton>
      ) : (
        <LinkButton href="/login">Log in</LinkButton>
      )}
    </Card>
  );
}
