import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { auth, signOut } from '@/auth';
import { MAHASISWA } from '@/lib/identitas';
import Navbar from '@/app/components/Navbar';
import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${MAHASISWA.tugas} - ${MAHASISWA.nama}`,
  description: `Situs pembelajaran ${MAHASISWA.matkul} oleh ${MAHASISWA.nama} (${MAHASISWA.nim})`,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  async function logout() {
    'use server';
    await signOut({ redirectTo: '/login' });
  }

  return (
    <html lang="id">
      <body className={`${font.className} text-slate-800 antialiased`}>
        {/* Foto kampus: simpan sebagai public/campus-hero.jpg. Jika belum ada, gradasi biru-hijau tampil. */}
        <div
          className="flex min-h-screen flex-col gap-4 bg-cover bg-center p-4"
          style={{
            backgroundImage:
              "url('/campus-hero.jpg'), linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #16a34a 100%)",
          }}
        >
          <Navbar
            isLoggedIn={isLoggedIn}
            right={
              isLoggedIn ? (
                <form action={logout} className="ml-2">
                  <button
                    type="submit"
                    className="rounded-full bg-white px-4 py-2 text-sm font-bold text-uia-navy transition hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Logout
                  </button>
                </form>
              ) : null
            }
          />

          <main className="flex flex-1 items-center py-4">{children}</main>

          <footer className="rounded-3xl bg-uia-navy px-6 py-4 text-sm text-white shadow-lg">
            <p>
              Web ini dikerjakan oleh <strong>{MAHASISWA.nama}</strong> | {MAHASISWA.nim}
            </p>
            <p className="mt-0.5">
              © {new Date().getFullYear()} All Rights Reserved. {MAHASISWA.prodi} – UIA
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
