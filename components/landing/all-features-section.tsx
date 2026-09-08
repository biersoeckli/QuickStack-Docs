import {
  Rocket,
  LayoutGrid,
  SlidersHorizontal,
  HardDrive,
  ShieldCheck,
  SquareActivity,
  DatabaseBackup,
  Users,
  Bot,
  Server,
  type LucideIcon,
} from 'lucide-react';
import { Eyebrow } from './shared';

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureGroup {
  icon: LucideIcon;
  title: string;
  items: FeatureItem[];
}

export const featureGroups: FeatureGroup[] = [
  {
    icon: Rocket,
    title: 'Deploy your way',
    items: [
      {
        title: 'Git or container image',
        description:
          'Connect a public/private repo (HTTPS or SSH) or pull straight from any registry, private ones included.',
      },
      {
        title: 'Zero-config builds',
        description:
          'Railpack auto-detects your stack and builds it. No Dockerfile required.',
      },
      {
        title: 'Bring your own Dockerfile',
        description: 'Full control when you need it, custom path supported.',
      },
      {
        title: 'Deploy via webhook or API',
        description:
          'Trigger deploys from CI, git providers, or your own scripts with a REST API key.',
      },
    ],
  },
  {
    icon: LayoutGrid,
    title: 'One-click app catalog',
    items: [
      {
        title: 'Ready-to-run apps',
        description:
          'Nextcloud, Vaultwarden, Gitea/Forgejo, Ghost, n8n and more — no manual Compose files.',
      },
      {
        title: '5 databases on tap',
        description:
          'Postgres, MySQL, MariaDB, MongoDB, Redis, provisioned in seconds.',
      },
      {
        title: 'AI agent sandboxes as templates',
        description:
          'Claude Code, opencode, Gemini CLI, GitHub Copilot CLI, ready to sandbox and run.',
      },
    ],
  },
  {
    icon: SlidersHorizontal,
    title: 'Runtime control',
    items: [
      {
        title: 'Scale with replicas',
        description: 'Run more than one instance per app when you need it.',
      },
      {
        title: 'Resource limits',
        description:
          'Set CPU/memory requests and limits per workload, no noisy neighbors.',
      },
      {
        title: 'Health checks',
        description:
          'HTTP or TCP probes with configurable interval, timeout, and failure threshold.',
      },
      {
        title: 'Env vars & file mounts',
        description: 'Secrets and config files injected into the container.',
      },
    ],
  },
  {
    icon: HardDrive,
    title: 'Storage that stays yours',
    items: [
      {
        title: 'Persistent volumes on Longhorn',
        description:
          'Replicated block storage across all nodes, not a single disk that dies with the server.',
      },
      {
        title: 'Share volumes between apps',
        description:
          'Mount the same volume in multiple workloads when they need shared state.',
      },
      {
        title: 'Built-in file browser',
        description:
          'Inspect and download files from a volume without shelling in.',
      },
      {
        title: 'One-click DB admin tools',
        description:
          'Launch pgAdmin, DBGate, or phpMyAdmin directly against your database, pre-connected, no manual setup or exposed ports.',
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Zero-trust networking',
    items: [
      {
        title: 'Deny-by-default network policies',
        description:
          'Every app is isolated by default; nothing talks to anything unless you explicitly allow it.',
      },
      {
        title: 'Custom domains with auto-SSL',
        description:
          "Unlimited domains per app, Let's Encrypt certificates issued and renewed automatically.",
      },
      {
        title: 'Node ports when you need raw access',
        description:
          'Expose a container port directly on the cluster node, deliberately.',
      },
      {
        title: 'Basic auth per app',
        description:
          'Password-protect a staging or internal app without bolting on another tool.',
      },
    ],
  },
  {
    icon: SquareActivity,
    title: "See what's happening",
    items: [
      {
        title: 'Live build & runtime logs',
        description: 'Streamed in the UI.',
      },
      {
        title: 'Live CPU/RAM metrics',
        description: 'Per app, in real time.',
      },
      {
        title: 'Web terminal',
        description:
          'Shell into a running container straight from the browser, no SSH keys to manage.',
      },
    ],
  },
  {
    icon: DatabaseBackup,
    title: 'Backups you actually control',
    items: [
      {
        title: 'Scheduled volume backups to S3',
        description:
          'Any S3-compatible target, cron schedule, configurable retention.',
      },
      {
        title: 'Native database dump backups',
        description:
          'Postgres/MySQL/MariaDB/MongoDB backed up as a proper dump, not just a raw disk snapshot.',
      },
      {
        title: 'System backup of QuickStack itself',
        description:
          'The control-plane database (all your projects and configs) is backed up separately from app data.',
      },
    ],
  },
  {
    icon: Users,
    title: 'Team access without the ops overhead',
    items: [
      {
        title: 'User groups & role-based permissions',
        description:
          'Control who can create, read, write, or delete apps per project.',
      },
      {
        title: 'Per-app / per-agent permissions',
        description:
          'Grant access down to a single workload, not just a whole project.',
      },
      {
        title: 'SSO',
        description:
          'Google, GitHub, Azure AD/Entra, or any generic OIDC provider.',
      },
      {
        title: '2FA and support',
        description: 'Beyond just a password.',
      },
      {
        title: 'Self-service API keys',
        description: 'Each user manages their own keys, with expiry.',
      },
    ],
  },
  {
    icon: Bot,
    title: 'AI agent sandboxes',
    items: [
      {
        title: 'Isolated, long-lived agent sandboxes',
        description:
          'Run AI coding agents as first-class workloads, not throwaway scripts.',
      },
      {
        title: 'Optional LLM gateway',
        description:
          'Bring a LiteLLM-compatible endpoint; you control which models are exposed, no vendor API keys scattered around.',
      },
      {
        title: 'Choice of harness',
        description: 'Claude Code, opencode, Gemini CLI, GitHub Copilot CLI.',
      },
      {
        title: 'Warm pools',
        description:
          'Pre-warmed sandbox instances so an agent starts instantly instead of cold-booting a container.',
      },
      {
        title: 'Locked-down agent networking',
        description:
          'Same deny-by-default model: an agent only reaches the apps you explicitly allow.',
      },
    ],
  },
  {
    icon: Server,
    title: 'Infrastructure you fully own',
    items: [
      {
        title: 'Multi-node from day one',
        description:
          'Add worker nodes with a join token whenever you outgrow a single box.',
      },
      {
        title: 'One-command install',
        description:
          'A single curl script turns a fresh Ubuntu/Debian server into a running platform.',
      },
      {
        title: 'Self-updating',
        description:
          'Update QuickStack from inside the UI, stable or canary channel.',
      },
      {
        title: 'Runs on real Kubernetes (k3s)',
        description:
          'Scheduling, services, ingress, PVs, jobs, and probes — proven primitives, not a custom orchestrator.',
      },
      {
        title: 'GPL-3.0, no lock-in',
        description:
          'Full source access, run it on a Raspberry Pi or a rack of servers, migrate away any time.',
      },
    ],
  },
];

export function AllFeaturesSection() {
  return (
    <section
      id="all-features"
      className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-24 md:py-32"
    >
      <div className="mb-16 max-w-2xl">
        <Eyebrow className="mb-5">All features</Eyebrow>
        <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
          Every feature you need, built in.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Ten areas across the whole product — from your first deploy to
          runtime control, storage, networking, team access and AI agent
          sandboxes.
        </p>
      </div>

      <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
        {featureGroups.map((group) => (
          <div
            key={group.title}
            className="mb-5 break-inside-avoid rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/15"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40">
                <group.icon className="size-3.5 text-foreground" />
              </span>
              <h3 className="text-[15px] font-medium tracking-tight text-foreground">
                {group.title}
              </h3>
            </div>

            <ul className="mt-5 space-y-3.5">
              {group.items.map((item) => (
                <li key={item.title}>
                  <p className="text-[13px] font-medium leading-snug text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
