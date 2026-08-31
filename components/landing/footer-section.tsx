import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';

interface FooterSectionProps {
  theme: 'light' | 'dark';
}

export function FooterSection({ theme }: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Getting Started', href: '/docs/tutorials/installation' },
    ],
    resources: [
      { label: 'GitHub', href: 'https://github.com/biersoeckli/quickstack' },
      { label: 'Issues', href: 'https://github.com/biersoeckli/quickstack/issues' },
      { label: 'Changelog', href: 'https://github.com/biersoeckli/quickstack/releases' },
    ],
    community: [
      { label: 'Contributing', href: 'https://github.com/biersoeckli/quickstack/blob/main/CONTRIBUTING.md' },
      { label: 'Twitter', href: 'https://x.com/quickstack_dev' },
    ],
  };

  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={
                  theme === 'light'
                    ? '/img/quickstack-icon-dark.svg'
                    : '/img/quickstack-icon-light.svg'
                }
                alt="QuickStack"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                QuickStack
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Deploy apps on your own infrastructure in minutes. Self-hosted,
              open-source, and built for developers who value simplicity.
            </p>
            <a
              href="https://github.com/biersoeckli/quickstack"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {[
            { title: 'Product', links: footerLinks.product },
            { title: 'Resources', links: footerLinks.resources },
            { title: 'Community', links: footerLinks.community },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} QuickStack. Open source under GPL-3.0 license.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
           
          </p>
        </div>
      </div>
    </footer>
  );
}
