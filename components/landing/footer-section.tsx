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
     // { label: 'Code of Conduct', href: 'https://github.com/biersoeckli/quickstack/blob/main/CODE_OF_CONDUCT.md' },
      //{ label: 'Discord', href: '#' },
      { label: 'Twitter', href: 'https://x.com/quickstack_dev' },
    ],
  };

  return (
    <footer className="border-t bg-fd-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={theme === 'light' ? '/img/quickstack-icon-dark.svg' : '/img/quickstack-icon-light.svg'}
                alt="QuickStack"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">QuickStack</span>
            </Link>
            <p className="text-fd-muted-foreground text-sm max-w-sm mb-4">
              Deploy apps on your own infrastructure in minutes. Self-hosted, open-source, and built for developers who value simplicity.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/biersoeckli/quickstack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-fd-muted-foreground">
            © {currentYear} QuickStack. Open source under GPL-3.0 license.
          </p>
          <div className="flex items-center gap-6">
            {/*<Link
              href="/docs/privacy"
              className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/docs/terms"
              className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              Terms of Service
            </Link>*/}
          </div>
        </div>
      </div>
    </footer>
  );
}
