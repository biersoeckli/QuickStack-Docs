import Link from 'next/link';
import { ArrowRight, LockKeyhole, PackageOpen, ShieldCheck } from 'lucide-react';
import { Eyebrow } from './shared';

const principles = [
  {
    icon: LockKeyhole,
    title: 'No vendor lock-in',
    text: 'Run QuickStack on infrastructure you choose. Your workloads use standard container images and Kubernetes primitives, so leaving is always an option.',
  },
  {
    icon: PackageOpen,
    title: 'Free forever. Every feature included.',
    text: 'QuickStack is GPL-3.0 open source. Inspect it, adapt it and run the same platform without feature gates or per-seat pricing.',
  },
  {
    icon: ShieldCheck,
    title: 'Data sovereignty by design',
    text: 'Keep app data, volumes, backups and configuration on infrastructure and in the jurisdiction you select.',
  },
];

export function OwnershipSection() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="max-w-xl">
            <Eyebrow className="mb-5">Your platform, your rules</Eyebrow>
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
              Keep control of the stack behind your product.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              QuickStack gives teams the ease of a hosted platform while keeping
              infrastructure, data and choices in their hands.
            </p>
            <Link
              href="/docs/reference/comparison"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Why QuickStack <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="flex gap-4 p-5 sm:p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{principle.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{principle.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
