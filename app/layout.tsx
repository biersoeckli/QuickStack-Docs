import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://quickstack.dev'),
  title: {
    default: 'QuickStack | Run any app on your own infrastructure',
    template: `%s | QuickStack`,
  },
  description: 'Self-hosted platform for running production applications on your own infrastructure. It handles app and database deployments, networking, HTTPS, storage, monitoring, backups and more. No vendor lock-in.',
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: 'QuickStack | Self-host any app on your own infrastructure',
    description: 'Self-hosted platform for running production applications on your own infrastructure. It handles app and database deployments, networking, HTTPS, storage, monitoring, backups and more. No vendor lock-in.',
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    siteName: 'QuickStack',
  },
  twitter: {
    card: "summary_large_image",
    title: 'QuickStack | Self-host any app on your own infrastructure',
    description: 'Self-hosted platform for running production applications on your own infrastructure. It handles app and database deployments, networking, HTTPS, storage, monitoring, backups and more. No vendor lock-in.',
    images: ["/og.png"],
  },
  icons: [
    { rel: "icon", url: "/img/quickstack-icon.png" },
    //{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" }
  ],
  keywords: [
    'QuickStack',
    'self-hosted paas',
    'open source paas',
    'kubernetes paas',
    'docker deployment platform',
    'container deployment platform',
    'git deployment',
    'web app hosting',
    'database hosting',
    'infrastructure management',
    'agent sandbox hosting',
    'container monitoring platform ',
    'deploy from git',
    'automated app backups',
    'containerized applications',
    'personal cloud platform',
    'self-hosting',
    'devops',
    'data sovereignty',
    'vendor lock-in free',
    'multi-node kubernetes',
    'vercel alternative',
    'netlify alternative',
    'railway alternative',
    'heroku alternative',
    'self-hosted vercel alternative',
    'self-hosted netlify alternative',
    'self-hosted railway alternative',
    'self-hosted heroku alternative',
  ],
  other: {
    "llms": "/llms.txt" // LLM discovery hint
  }
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Information" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <script
          src="https://s.idevop.ch/api/script.js"
          data-site-id="7f1ec7d4186c"
          defer
        ></script>
      </body>
    </html>
  );
}
