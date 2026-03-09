import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'QuickStack Docs',
  description: 'QuickStack Dokumentation mit Next.js + Fumadocs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <RootProvider theme={{ enabled: false }} search={{ enabled: false }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
