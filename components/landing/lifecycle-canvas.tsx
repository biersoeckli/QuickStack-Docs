'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Database, Server, Workflow, Zap } from 'lucide-react';
import { StatusDot } from './shared';

const steps = [
  'Deploying your app',
  'Adding a database',
  'Adding Redis cache',
  'Adding a microservice',
];

export function LifecycleCanvas() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((current) => (current + 1) % steps.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, []);

  const databaseVisible = step >= 1;
  const redisVisible = step >= 2;
  const serviceVisible = step >= 3;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-40px_rgb(0_0_0_/_0.3)]">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="text-sm font-medium text-foreground">App lifecycle</p>
          <p className="font-mono text-[11px] text-muted-foreground">project / storefront</p>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
          <StatusDot className="text-primary" pulse /> {steps[step]}
        </span>
      </div>

      <div className="relative h-[390px] overflow-hidden bg-[radial-gradient(circle_at_center,var(--border)_1px,transparent_1.25px)] bg-[size:18px_18px] sm:h-[420px]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
          <path d="M50 8 V38" vectorEffect="non-scaling-stroke" className={`transition-opacity duration-700 ${databaseVisible ? 'stroke-primary opacity-70' : 'stroke-border opacity-20'}`} strokeWidth="1.5" strokeDasharray="3 5" />
          <path d="M50 38 L25 48" vectorEffect="non-scaling-stroke" className={`transition-opacity duration-700 ${databaseVisible ? 'stroke-primary opacity-70' : 'stroke-border opacity-20'}`} strokeWidth="1.5" strokeDasharray="3 5" />
          <path d="M50 38 L75 48" vectorEffect="non-scaling-stroke" className={`transition-opacity duration-700 ${redisVisible ? 'stroke-primary opacity-70' : 'stroke-border opacity-20'}`} strokeWidth="1.5" strokeDasharray="3 5" />
          <path d="M50 38 V74" vectorEffect="non-scaling-stroke" className={`transition-opacity duration-700 ${serviceVisible ? 'stroke-primary opacity-70' : 'stroke-border opacity-20'}`} strokeWidth="1.5" strokeDasharray="3 5" />
        </svg>

        <CanvasNode
          className="left-1/2 top-[8%] w-[min(76%,280px)] -translate-x-1/2"
          icon={<Server className="size-4" />}
          title="storefront-web"
          subtitle="Next.js · running"
          status="healthy"
        />

        <CanvasNode
          className={`left-[5%] top-[46%] w-[42%] transition-all duration-700 ease-out sm:left-[10%] sm:w-[34%] ${databaseVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          icon={<Database className="size-4" />}
          title="postgres-main"
          subtitle="Postgres 16 · persistent"
          status="connected"
        />

        <CanvasNode
          className={`right-[5%] top-[46%] w-[42%] transition-all duration-700 ease-out sm:right-[10%] sm:w-[34%] ${redisVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          icon={<Zap className="size-4" />}
          title="redis-cache"
          subtitle="Redis 7 · cache layer"
          status={redisVisible ? 'ready' : 'queued'}
        />

        <CanvasNode
          className={`bottom-[6%] left-1/2 w-[min(76%,250px)] -translate-x-1/2 transition-all duration-700 ease-out ${serviceVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
          icon={<Workflow className="size-4" />}
          title="image-worker"
          subtitle="microservice · connected"
          status={serviceVisible ? 'running' : 'queued'}
        />
      </div>

      <div className="flex items-center gap-1.5 border-t border-border px-5 py-3">
        {steps.map((label, index) => (
          <span
            key={label}
            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${index <= step ? 'bg-primary' : 'bg-muted'}`}
            aria-label={label}
          />
        ))}
      </div>
    </div>
  );
}

function CanvasNode({
  className,
  icon,
  title,
  subtitle,
  status,
}: {
  className: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  status: string;
}) {
  return (
    <div className={`absolute rounded-xl border border-border bg-background p-3 shadow-[0_8px_24px_-16px_rgb(0_0_0_/_0.45)] ${className}`}>
      <div className="flex items-start gap-2.5">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/50 text-primary">{icon}</span>
        <div className="min-w-0">
          <p className="truncate font-mono text-[11px] font-medium text-foreground">{title}</p>
          <p className="mt-0.5 truncate font-mono text-[9px] text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1.5 border-t border-border pt-2 font-mono text-[9px] text-muted-foreground">
        <StatusDot className="text-emerald-500" /> {status}
      </div>
    </div>
  );
}
