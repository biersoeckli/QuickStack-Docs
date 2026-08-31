import type { ReactNode } from 'react';
import { GitBranch, SquareActivity, Server, Lock } from 'lucide-react';
import { Eyebrow, StatusDot } from './shared';

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
  { label: 'Registry', detail: 'built-in private registry' },
  { label: 'Deploy', detail: 'k3s rolling update' },
  { label: 'HTTPS', detail: 'Traefik · Let’s Encrypt' },
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

function CardShell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-none ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

function CardHead({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border px-5 py-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      {hint && (
        <span className="font-mono text-[11px] text-muted-foreground">
          {hint}
        </span>
      )}
    </div>
  );
}

function DeployPipeline() {
  return (
    <div className="flex flex-1 flex-col px-5 py-5">
      <div className="space-y-0">
        {deploySteps.map((step, i) => (
          <div key={step.label} className="relative flex items-center gap-4 pb-5 last:pb-0">
            {i < deploySteps.length - 1 && (
              <span className="absolute left-[7px] top-5 h-full w-px bg-border" />
            )}
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
    <div className="flex flex-1 flex-col gap-5 px-5 py-5">
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
            className="flex-1 rounded-sm bg-muted"
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
    <div className="flex flex-1 flex-col px-5 py-5">
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
    <div className="flex flex-1 flex-col px-5 py-5">
      <div className="flex-1 space-y-2">
        {databases.map((db) => (
          <div
            key={db.name}
            className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5"
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
    <div className="flex flex-1 flex-col gap-4 px-5 py-5">
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
              className="h-full rounded-full bg-foreground"
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
    <div className="flex flex-1 flex-col px-5 py-5">
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

const pillarSummary = [
  {
    key: 'Deploy',
    tagline: 'Git push to a running app — no manual orchestration.',
  },
  {
    key: 'Operate',
    tagline: 'Logs, terminal and metrics without SSH gymnastics.',
  },
  {
    key: 'Scale',
    tagline: 'Grow from one VPS to a multi-node cluster.',
  },
  {
    key: 'Secure',
    tagline: 'Control access down to the project level.',
  },
];

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
        <CardShell className="md:col-span-7">
          <CardHead label="Deploy" hint="pipeline" />
          <DeployPipeline />
        </CardShell>

        <CardShell className="md:col-span-5">
          <CardHead label="Operate" hint="monitoring" />
          <MonitoringChart />
        </CardShell>

        <CardShell className="md:col-span-5">
          <CardHead label="Operate" hint="logs" />
          <TerminalLogs />
        </CardShell>

        <CardShell className="md:col-span-4">
          <CardHead label="Databases" hint="one-click" />
          <DatabasesList />
        </CardShell>

        <CardShell className="md:col-span-4">
          <CardHead label="Scale" hint="cluster" />
          <ClusterNodes />
        </CardShell>

        <CardShell className="md:col-span-4">
          <CardHead label="Secure" hint="access" />
          <TeamAccess />
        </CardShell>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillarSummary.map((pillar) => (
          <div key={pillar.key}>
            <p className="text-sm font-medium text-foreground">{pillar.key}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              {pillar.tagline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
