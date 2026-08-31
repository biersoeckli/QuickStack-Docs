import Link from 'next/link';
import Image from 'next/image';
import { Eyebrow } from './shared';

const techStack = [
  { name: 'k3s', logo: '/img/tech-stack/k3s-logo.svg', url: 'https://k3s.io/', darkMode: false },
  { name: 'Longhorn', logo: '/img/tech-stack/longhorn-logo.png', logoDark: '/img/tech-stack/longhorn-logo-light.png', url: 'https://longhorn.io/', darkMode: true },
  { name: 'Buildkit', logo: '/img/tech-stack/buildkit-logo.png', url: 'https://github.com/moby/buildkit', darkMode: false },
  { name: 'Registry', logo: '/img/tech-stack/registry-logo.png', url: 'https://github.com/distribution/distribution', darkMode: false },
];

interface TechStackSectionProps {
  theme: 'light' | 'dark';
}

export function TechStackSection({ theme }: TechStackSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 items-start gap-10 rounded-2xl border border-border bg-card p-8 md:grid-cols-12 md:p-12">
        <div className="md:col-span-4">
          <Eyebrow className="mb-5">Under the hood</Eyebrow>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-foreground">
            Built on battle-tested open source.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            QuickStack orchestrates Kubernetes primitives so you don’t have to.
            It runs on k3s, routes with Traefik, stores volumes with Longhorn and
            builds images with BuildKit.
          </p>
        </div>

        <div className="md:col-span-8">
          <div className="grid grid-cols-2 items-center gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {techStack.map((tech) => (
              <Link
                key={tech.name}
                href={tech.url}
                target="_blank"
                className="flex h-24 items-center justify-center bg-card p-6 grayscale hover:grayscale-0 transition-colors hover:bg-muted/40"
              >
                <Image
                  src={
                    tech.darkMode && theme === 'dark' && tech.logoDark
                      ? tech.logoDark
                      : tech.logo
                  }
                  alt={`${tech.name} Logo`}
                  width={160}
                  height={48}
                  className="max-h-9 w-auto object-contain opacity-80  transition-opacity hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
