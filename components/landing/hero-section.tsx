'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Check, Copy, CheckCheck } from 'lucide-react';
import { useState } from 'react';

const trustItems = [
  'Open Source',
  'Self-hosted',
  'Git & Registry Deploy',
  'Auto HTTPS',
  'Backups',
  'Team Access',
  'Cluster Ready',
];

interface HeroSectionProps {
  theme: 'light' | 'dark';
}

export function HeroSection({ theme }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const installCommand = 'curl -sfL https://get.quickstack.dev/setup.sh | sh -';

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
    <section className="container mx-auto px-4 py-16 md:py-24 lg:py-26">
      <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
        <Image 
          src={theme === 'dark' ? '/img/quickstack-icon-light.svg' : '/img/quickstack-icon-dark.svg'}
          alt="QuickStack Logo" 
          width={120} 
          height={120}
          className="w-20 h-20 md:w-32 md:h-32"
        />
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Self-host <span className="text-primary">any app</span> on your own servers
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Deploy databases or apps from Git or Docker Hub on any server. QuickStack provides all you need from a single UI running on your own infrastructure.
        </p>

        {/* Installation Command */}
        <div className="w-full max-w-xl">
          <Card className="border-border/50 py-2">
            <CardContent className="flex items-center justify-between gap-3">
              <code className="text-xs md:text-sm font-mono block text-left break-all flex-1">
                {installCommand}
              </code>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Copy installation command"
              >
                {copied ? (
                  <CheckCheck className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </CardContent>
          </Card>
          <p className="text-xs md:text-sm text-muted-foreground mt-3">
            Run on a fresh Linux server. Min: 2 CPU · 4 GB RAM · 40 GB disk.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/docs/tutorials/installation">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/biersoeckli/QuickStack" target="_blank">
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
          {trustItems.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
