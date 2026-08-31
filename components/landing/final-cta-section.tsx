import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Eyebrow, StatusDot } from './shared';

export function FinalCtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-10 rounded-2xl border border-border bg-card px-8 py-14 md:flex-row md:items-center md:px-14">
        <div className="max-w-xl">
          <Eyebrow className="mb-5">
            <StatusDot className="text-emerald-500" pulse />
            Open source · Self-hosted · Free
          </Eyebrow>
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
            Deploy on your own infrastructure.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Install QuickStack on your server in minutes. No managed cloud
            required.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/docs/tutorials/installation"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Read the Docs
          </Link>
        </div>
      </div>
    </section>
  );
}
