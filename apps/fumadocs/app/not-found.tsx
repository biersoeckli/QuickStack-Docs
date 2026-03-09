import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 text-slate-100">
      <h1 className="text-3xl font-bold">Seite nicht gefunden</h1>
      <Link href="/" className="text-primary">Zur Startseite</Link>
    </main>
  );
}
