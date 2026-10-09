'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, Check, HardDrive, Network, Server } from 'lucide-react';
import { Eyebrow, StatusDot } from './shared';

type Node = {
  name: string;
  role: 'control plane' | 'worker';
};

const newNode: Node = { name: 'node-02', role: 'worker' };

export function ScaleSection() {
  const [phase, setPhase] = useState(0);
  const hasResourceWarning = phase === 1;
  const nodeAdded = phase === 2;

  useEffect(() => {
    const interval = window.setInterval(() => setPhase((value) => (value + 1) % 3), 3600);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-xl">
          <Eyebrow className="mb-5">Scale when you need it</Eyebrow>
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
            Start with one node. Grow without starting over.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Begin on the server you have today. When workloads grow, join worker
            nodes to the same cluster without moving apps, rebuilding volumes,
            or changing how your team deploys.
          </p>
          <div className="mt-8 gap-3 sm:grid-cols-2 hidden lg:grid">
            <div className="rounded-xl border border-border bg-card p-4">
              <HardDrive className="size-4 text-primary" />
              <p className="mt-3 text-sm font-medium text-foreground">Storage follows</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Longhorn replicates persistent volumes across the cluster.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Network className="size-4 text-primary" />
              <p className="mt-3 text-sm font-medium text-foreground">Traffic adapts</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Workloads are load-balanced as capacity comes online.
              </p>
            </div>
          </div>
          <Link
            href="/docs/how-to/admin/cluster-nodes"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Learn about cluster nodes <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_-40px_rgb(0_0_0_/_0.3)]">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-muted/50">
                <Server className="size-4 text-foreground" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Production cluster</p>
                <p className="font-mono text-[11px] text-muted-foreground">eu-central</p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="relative space-y-3">
              <span className="absolute bottom-5 left-7 top-5 w-px bg-border" aria-hidden="true" />
              <NodeRow
                node={{ name: 'node-01', role: 'control plane' }}
                detail="4 CPU · 8 GB"
                warning={hasResourceWarning}
              />
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-700 ease-out ${
                  nodeAdded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
                aria-hidden={!nodeAdded}
              >
                <div className="overflow-hidden">
                  <div
                    className={`pb-3 transition-all duration-700 ease-out ${
                      nodeAdded ? 'translate-y-0 scale-100' : '-translate-y-2 scale-[0.98]'
                    }`}
                  >
                    <NodeRow node={newNode} detail="2 CPU · 4 GB" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NodeRow({ node, detail, warning = false }: { node: Node; detail: string; warning?: boolean }) {
  return (
    <div
      className={`relative flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors duration-500 ${
        warning ? 'border-orange-500/50 bg-orange-500/5' : 'border-border'
      }`}
    >
      <span
        className={`z-10 flex size-6 items-center justify-center rounded-full border ${
          warning ? 'border-orange-500/30 bg-orange-500/10' : 'border-emerald-500/25 bg-emerald-500/10'
        }`}
      >
        {warning ? (
          <AlertTriangle className="size-3 text-orange-600 dark:text-orange-400" />
        ) : (
          <Check className="size-3 text-emerald-600 dark:text-emerald-400" />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-xs text-foreground">{node.name}</p>
        <p className={`mt-0.5 font-mono text-[10px] ${warning ? 'text-orange-700 dark:text-orange-400' : 'text-muted-foreground'}`}>
          {warning ? 'resources exhausted' : node.role}
        </p>
      </div>
      <span className={`font-mono text-[10px] ${warning ? 'text-orange-700 dark:text-orange-400' : 'text-muted-foreground'}`}>
        {detail}
      </span>
    </div>
  );
}
