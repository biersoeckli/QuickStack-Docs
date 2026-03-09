import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-white/10 px-6 py-4">
        <Link href="/" className="font-semibold text-primary">QuickStack</Link>
        <Link href="/docs" className="text-sm text-slate-300 hover:text-primary">Docs Home</Link>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-10">{children}</div>
    </div>
  );
}
