'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Github, Copy, Check, ArrowRight } from 'lucide-react';
import { Eyebrow, StatusDot } from './shared';

const installCommand = 'curl -sfL https://get.quickstack.dev/setup.sh | sh -';

const trustItems = [
  'Open source',
  'Self-hosted',
  'Git & registry deploy',
  'Auto HTTPS',
  'Backups',
  'Team access',
];

interface HeroSectionProps {
  theme: 'light' | 'dark';
}

export function HeroSection({ theme }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 pt-20 pb-24 md:pt-32 md:pb-32">
      <div className="flex flex-col items-center text-center">
        <Eyebrow className="mb-8 justify-center">
          <StatusDot className="text-emerald-500" pulse />
          Self-hosted PaaS · Open source
        </Eyebrow>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tighter text-foreground sm:text-6xl md:text-7xl">
          Run any app on your own servers.
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Deploy from Git or any container registry. QuickStack gives you
          builds, domains, HTTPS, logs, metrics and backups — from one UI.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/docs/tutorials/installation"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            Get Started
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

        {/* Install terminal */}
        <div className="mt-14 w-full max-w-xl text-left">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-none">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="size-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                install.sh
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Copy installation command"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="flex items-center gap-2 px-4 py-4">
              <span className="select-none font-mono text-sm text-muted-foreground">
                $
              </span>
              <code className="font-mono text-sm text-foreground break-all">
                {installCommand}
              </code>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
            Fresh Linux server · Min 2 CPU · 4 GB RAM · 40 GB disk
          </p>
        </div>

        {/* Trust indicators + social proof */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-[13px] text-muted-foreground"
              >
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 border-t border-border pt-6">
            <Link
              href="https://github.com/biersoeckli/QuickStack/stargazers"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <img
                src="https://img.shields.io/github/stars/biersoeckli/QuickStack?style=social"
                alt="GitHub stars"
                className="h-5 w-auto"
                loading="lazy"
              />
            </Link>
            <span className="h-4 w-px bg-border" />
            <span className="font-mono text-[11px] text-muted-foreground">
              GPL-3.0
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="font-mono text-[11px] text-muted-foreground">
              Built on k3s · Traefik · Longhorn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
