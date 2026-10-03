import { Eyebrow } from './shared';

export const useCases = [
  {
    number: '01',
    title: 'Agencies & small teams',
    description:
      'Give everyone a shared platform with per-project and per-app permissions. Ship staging and production for each client and hand over a clean dashboard.',
    tags: ['Users & groups', 'Per-app access', 'Multi-server'],
  },
  {
    number: '02',
    title: 'Self-hosters & automation builders',
    description:
      'Deploy WordPress, n8n, Nextcloud, Gitea and databases from templates, with automatic TLS and a network graph that shows what talks to what — no terminal required.',
    tags: ['Templates', 'Auto SSL', 'Web UI'],
  },
  {
    number: '03',
    title: 'Indie hackers & solo builders',
    description:
      'Run a portfolio of apps and databases on one VPS. Git-push deploys, automatic HTTPS and backups — at a fixed server cost, no per-request surprises.',
    tags: ['Git deploy', 'Low cost', 'Backups'],
  },
  {
    number: '04',
    title: 'Regulated teams that need data ownership',
    description:
      'Keep applications, databases and backups on infrastructure you control, in your jurisdiction — with SSO, 2FA and per-project access for compliance reviews.',
    tags: ['Self-hosted', 'Data ownership', 'SSO'],
  },
];

export function UseCasesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="mb-16 max-w-xl">
        <Eyebrow className="mb-5">Who it’s for</Eyebrow>
        <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
          Built for people who ship on their own terms.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {useCases.map((uc) => (
          <div key={uc.number} className="flex flex-col bg-card p-7">
            <span className="font-mono text-sm text-muted-foreground">
              {uc.number}
            </span>
            <h3 className="mt-4 text-lg font-medium leading-snug text-foreground">
              {uc.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {uc.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-5">
              {uc.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
