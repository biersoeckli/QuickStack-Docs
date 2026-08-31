import type { ReactNode } from 'react';
import { GitBranch, SquareActivity, Server, Lock } from 'lucide-react';
import { Eyebrow, StatusDot } from './shared';
import { Reveal } from './reveal';

export const pillars = [
  {
    icon: GitBranch,
    title: 'Deploy',
    tagline: 'Get apps running without manual container orchestration.',
    items: [
      'Deploy from any Git repository (public or private)',
      'Deploy from any container registry',
      'One-click database deployments from templates',
      'Automatic domain setup and HTTPS via Let\'s Encrypt',
      'Webhook-triggered auto-deploys on push',
    ],
  },
  {
    icon: SquareActivity,
    title: 'Operate',
    tagline: 'See what is running and fix problems without SSH gymnastics.',
    items: [
      'Real-time log streaming per container',
      'Integrated web terminal for direct container access',
      'CPU, RAM, and disk metrics per app',
      'Health checks and restart policies',
      'Scheduled backups',
    ],
  },
  {
    icon: Server,
    title: 'Scale',
    tagline: 'Grow from a single VPS to a multi-node cluster without rearchitecting.',
    items: [
      'Add nodes to form a cluster at any time',
      'Cluster-wide persistent storage volumes (Longhorn)',
      'Automatic load balancing across nodes',
      'quickstack.me instant subdomains for fast preview access',
      'Internal service networking between apps',
    ],
  },
  {
    icon: Lock,
    title: 'Secure',
    tagline: 'Control who can access what, down to the project level.',
    items: [
      'User and group management',
      'Granular per-project permissions',
      'Two-factor authentication (2FA)',
      'Network policies to isolate services',
      'Basic authentication for exposed endpoints',
    ],
  },
];

const deploySteps = [
  { label: 'git push', detail: 'source from any Git host' },
  { label: 'Build', detail: 'BuildKit · container image' },
  { label: 'Deploy', detail: 'k3s rolling update' },
  { label: 'Live', detail: 'routing + health checks', running: true },
];

const logLines = [
  { time: '12:01:04', level: 'INFO', text: 'Listening on :3000' },
  { time: '12:01:06', level: 'INFO', text: 'Connected to postgres' },
  { time: '12:01:11', level: 'WARN', text: 'Retrying webhook delivery' },
  { time: '12:01:12', level: 'INFO', text: 'Deployment healthy' },
];

const databases = [
  { name: 'postgres', version: '16', status: 'running' },
  { name: 'redis', version: '7.4', status: 'running' },
  { name: 'mysql', version: '8.4', status: 'running' },
];

const nodes = [
  { name: 'master-1', role: 'control', load: 42 },
  { name: 'worker-1', role: 'worker', load: 61 },
  { name: 'worker-2', role: 'worker', load: 38 },
];

const members = [
  { name: 'alex@acme.io', role: 'Owner', mfa: true },
  { name: 'sam@acme.io', role: 'Admin', mfa: true },
  { name: 'dev@acme.io', role: 'Member', mfa: false },
];

function FeatureCard({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group flex w-full flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 ${className ?? ''}`}
    >
      <div className="border-b border-border px-6 pt-6 pb-5">
        <Eyebrow className="mb-2.5">{eyebrow}</Eyebrow>
        <h3 className="text-lg font-medium tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-muted/30">
          {children}
        </div>
      </div>
    </div>
  );
}

function DeployPipeline() {
  return (
    <div className="flex flex-1 flex-col px-4 py-4">
      <div className="relative flex flex-1 flex-col justify-between">
        <span className="absolute bottom-5 left-[7px] top-5 w-px bg-border" />
        {deploySteps.map((step) => (
          <div key={step.label} className="relative flex items-center gap-4">
            <StatusDot
              className={
                step.running
                  ? 'text-emerald-500'
                  : 'text-muted-foreground'
              }
            />
            <div className="flex flex-1 items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">{step.label}</p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {step.detail}
                </p>
              </div>
              {step.running && (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                  <StatusDot className="text-emerald-500" pulse />
                  Running
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonitoringChart() {
  const bars = [38, 52, 44, 61, 48, 72, 58, 66, 51, 74, 63, 55, 69, 60, 47, 71, 57, 64, 50, 68];
  const spark = [12, 18, 15, 22, 19, 27, 24, 30, 26, 34, 29, 38, 33, 42, 36, 45, 40, 49, 44, 52];

  const max = Math.max(...spark);
  const points = spark
    .map((v, i) => `${(i / (spark.length - 1)) * 100},${32 - (v / max) * 28}`)
    .join(' ');

  return (
    <div className="flex flex-1 flex-col gap-5 px-4 py-4">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-foreground">
            1.4 GB
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            RAM in use
          </p>
        </div>
        <StatusDot className="text-emerald-500" pulse />
      </div>

      <svg viewBox="0 0 100 32" className="h-16 w-full" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="text-foreground"
        />
      </svg>

      <div className="flex items-end gap-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-muted transition-[height] duration-700 group-hover:bg-muted-foreground/30"
            style={{ height: `${(h / 100) * 48}px` }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="font-mono text-[11px] text-muted-foreground">CPU</span>
        <span className="font-mono text-[11px] text-muted-foreground">
          last 24h
        </span>
      </div>
    </div>
  );
}

function TerminalLogs() {
  return (
    <div className="flex flex-1 flex-col px-4 py-4">
      <div className="flex-1 space-y-1.5">
        {logLines.map((line) => (
          <div key={line.time} className="flex gap-3 font-mono text-[11.5px] leading-relaxed">
            <span className="shrink-0 text-muted-foreground">{line.time}</span>
            <span
              className={
                line.level === 'WARN'
                  ? 'shrink-0 text-amber-500'
                  : 'shrink-0 text-emerald-500'
              }
            >
              {line.level}
            </span>
            <span className="truncate text-foreground">{line.text}</span>
          </div>
        ))}
        <div className="flex gap-3 font-mono text-[11.5px] leading-relaxed">
          <span className="text-muted-foreground">12:01:13</span>
          <span className="text-emerald-500">INFO</span>
          <span className="text-foreground">
            █<span className="animate-pulse text-muted-foreground">_</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function DatabasesList() {
  return (
    <div className="flex flex-1 flex-col px-4 py-4">
      <div className="flex-1 space-y-2">
        {databases.map((db) => (
          <div
            key={db.name}
            className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5 transition-colors hover:bg-background"
          >
            <div className="flex items-center gap-2.5">
              <StatusDot className="text-emerald-500" />
              <span className="font-mono text-[13px] text-foreground">
                {db.name}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                v{db.version}
              </span>
            </div>
            <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
              {db.status}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 inline-flex h-8 items-center justify-center rounded-md border border-dashed border-border text-[12px] font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
        + Deploy database
      </button>
    </div>
  );
}

function ClusterNodes() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-4">
      {nodes.map((node) => (
        <div key={node.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StatusDot className="text-emerald-500" />
              <span className="font-mono text-[13px] text-foreground">
                {node.name}
              </span>
              <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {node.role}
              </span>
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              {node.load}%
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-foreground transition-[width] duration-700 group-hover:bg-muted-foreground"
              style={{ width: `${node.load}%` }}
            />
          </div>
        </div>
      ))}
      <p className="mt-auto border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
        Auto load-balanced · Longhorn shared storage
      </p>
    </div>
  );
}

function TeamAccess() {
  return (
    <div className="flex flex-1 flex-col px-4 py-4">
      <div className="flex-1 space-y-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between py-1.5"
          >
            <div className="min-w-0">
              <p className="truncate text-[13px] text-foreground">{m.name}</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                {m.role} · per-project
              </p>
            </div>
            <span
              className={
                m.mfa
                  ? 'rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400'
                  : 'rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground'
              }
            >
              {m.mfa ? '2FA' : '—'}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-auto border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
        Granular permissions · 2FA · network policies
      </p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="mb-16 max-w-2xl">
        <Eyebrow className="mb-5">Product</Eyebrow>
        <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
          Everything you need to run production apps.
        </h2>
        <p className="mt-5 text-muted-foreground">
          QuickStack covers the full lifecycle — from first deploy to
          day-to-day operations, team access and cluster growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Reveal className="flex md:col-span-7">
          <FeatureCard
            eyebrow="Deploy"
            title="Push to deploy"
            description="Build from any Git repo or container registry. Webhooks trigger auto-deploys on every push, served behind automatic HTTPS."
          >
            <DeployPipeline />
          </FeatureCard>
        </Reveal>

        <Reveal delay={80} className="flex md:col-span-5">
          <FeatureCard
            eyebrow="Operate"
            title="Watch what's running"
            description="Live CPU, RAM and disk metrics per app, with health checks and restart policies."
          >
            <MonitoringChart />
          </FeatureCard>
        </Reveal>

        <Reveal delay={140} className="flex md:col-span-5">
          <FeatureCard
            eyebrow="Operate"
            title="Logs and terminal"
            description="Stream container logs in real time and drop into a web terminal — no SSH required."
          >
            <TerminalLogs />
          </FeatureCard>
        </Reveal>

        <Reveal delay={80} className="flex md:col-span-7">
          <FeatureCard
            eyebrow="Databases"
            title="One-click databases"
            description="Spin up Postgres, MySQL or Redis from templates and connect them over internal networking."
          >
            <DatabasesList />
          </FeatureCard>
        </Reveal>

        <Reveal delay={140} className="flex md:col-span-6">
          <FeatureCard
            eyebrow="Scale"
            title="Grow into a cluster"
            description="Add nodes anytime. Longhorn provides shared storage and load balancing across the cluster."
          >
            <ClusterNodes />
          </FeatureCard>
        </Reveal>

        <Reveal delay={200} className="flex md:col-span-6">
          <FeatureCard
            eyebrow="Secure"
            title="Lock down access"
            description="Per-project permissions, 2FA and network policies keep every app isolated."
          >
            <TeamAccess />
          </FeatureCard>
        </Reveal>
      </div>
    </section>
  );
}
