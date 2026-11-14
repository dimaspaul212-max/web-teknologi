import Link from 'next/link';

// Kartu putih transparan (efek kaca) di atas foto latar.
export function Card({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section
      className={`w-full rounded-3xl bg-white/85 p-7 shadow-xl backdrop-blur-md md:p-9 ${
        wide ? 'max-w-2xl' : 'max-w-lg'
      }`}
    >
      {children}
    </section>
  );
}

// Dua garis kecil biru + hijau di atas judul.
export function AccentBars() {
  return (
    <div className="mb-5 flex gap-2" aria-hidden="true">
      <span className="h-1 w-14 rounded-full bg-uia-blue" />
      <span className="h-1 w-14 rounded-full bg-green-500" />
    </div>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export const buttonClass =
  'inline-flex items-center gap-2 rounded-full bg-uia-blue px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-uia-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uia-blue disabled:cursor-not-allowed disabled:opacity-60';

export function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={`${buttonClass} mt-7`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
