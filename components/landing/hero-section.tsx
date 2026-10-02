'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Eyebrow, StatusDot } from './shared';

interface HeroSectionProps {
  theme: 'light' | 'dark';
}

export function HeroSection({ theme }: HeroSectionProps) {
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="flex flex-col items-center text-center">
        <Eyebrow className="mb-4 justify-center font-semibold rounded-full border bg-primary/10 px-3 py-1.5 text-primary darK:bg-primary/20 dark:text-primary">
          Self-hosted PaaS
        </Eyebrow>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.07] tracking-tighter text-foreground sm:text-6xl md:text-7xl">
          Run your apps.<br /> Own the infrastructure.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Deploy apps and databases from Git or any container registry. QuickStack handles networking, HTTPS, storage, monitoring and backups on your own servers.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/docs/tutorials/installation"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-background transition-colors hover:bg-primary/85"
          >
            Install QuickStack
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/biersoeckli/QuickStack"
            target="_blank"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        </div>

        <div className="mt-14 w-full max-w-6xl text-left sm:mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-32px_rgb(0_0_0_/_0.35)]">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                QuickStack
              </span>
            </div>
            <div className="relative aspect-[923/505] w-full bg-muted">
              {!isVideoReady && (
                <Skeleton
                  className="absolute inset-0 size-full rounded-none"
                  aria-label="Loading product demonstration"
                />
              )}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onCanPlay={() => setIsVideoReady(true)}
                className={`block size-full object-contain transition-opacity duration-300 ${
                  isVideoReady ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="QuickStack product demonstration"
              >
                <source src="/videos/quickstack_v1_demo_4k_2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
