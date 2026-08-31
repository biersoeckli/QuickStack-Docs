import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from './shared';

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Install on a fresh server',
    description:
      'One command sets up the whole platform on your VPS or bare-metal box.',
    code: 'curl -sfL https://get.quickstack.dev/setup.sh | sh -',
  },
  {
    number: '02',
    title: 'Connect a repo or image',
    description:
      'Point QuickStack at any Git repository, or pull from Docker Hub and private registries. Pick a database template for one-click Postgres, MySQL or Redis.',
  },
  {
    number: '03',
    title: 'Deploy — the rest is handled',
    description:
      'QuickStack builds, provisions a domain, issues HTTPS, starts the container and gives you logs, terminal, metrics and backups in the same UI.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <Eyebrow className="mb-5">How it works</Eyebrow>
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
            From a blank server to a running app in minutes.
          </h2>
        </div>
        <Link
          href="/docs/tutorials/installation"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          Installation guide
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {howItWorksSteps.map((step) => (
          <div key={step.number} className="bg-card p-7">
            <span className="font-mono text-sm text-muted-foreground">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-medium text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
            {step.code && (
              <code className="mt-5 block overflow-x-auto rounded-lg border border-border bg-muted/40 px-3 py-2.5 font-mono text-xs text-foreground">
                {step.code}
              </code>
            )}
          </div>
        ))}
      </div>

      {/* Video demo */}
      <div className="mx-auto mt-6 max-w-[1000px] overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            Demo
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            02:14
          </span>
        </div>
        <div className="aspect-video w-full bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/koqGZ2ChHvw?si=44prf579KAtnBlpO"
            title="QuickStack Installation Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
