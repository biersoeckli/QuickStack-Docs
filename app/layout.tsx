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
  description: 'QuickStack is a self-hosted platform for running production applications on your own infrastructure. Deploy web apps, databases, and more with ease, while maintaining full control and security.',
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: 'QuickStack | Run any app on your own infrastructure',
    description: 'QuickStack is a self-hosted platform for running production applications on your own infrastructure. Deploy web apps, databases, and more with ease, while maintaining full control and security.',
    images: [{ url: "/img/quickstack-social-card.png", width: 1050, height: 600 }],
    siteName: 'QuickStack',
  },
  twitter: {
    card: "summary_large_image",
    title: 'QuickStack | Run any app on your own infrastructure',
    description: 'QuickStack is a self-hosted platform for running production applications on your own infrastructure. Deploy web apps, databases, and more with ease, while maintaining full control and security.',
    images: ["/img/quickstack-social-card.png"],
  },
  icons: [
    { rel: "icon", url: "/img/quickstack-icon-dark.png" },
    //{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" }
  ],
  keywords: ['self-hosting', 'PaaS', 'platform as a service', 'kubernetes', 'devops', 'cloud alternatives', 'web app hosting', 'database hosting', 'infrastructure management', 'deployment', 'server', 'monitoring', 'debugging', 'git', 'backups', 'containerized applications','personal cloud platform'],
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
      </body>
    </html>
  );
}
