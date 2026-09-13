import { Eyebrow } from './shared';

export const useCases = [
  {
    number: '01',
    title: 'Small teams that want a Heroku-like DX',
    description:
      'Push-to-deploy, automatic HTTPS, env vars, logs and backups — on infrastructure you control, without anyone learning cluster management.',
    tags: ['Team access', 'Permissions', 'Backups'],
  },
  {
    number: '02',
    title: 'DevOps engineers who want control',
    description:
      'Comfortable with servers but tired of gluing together Traefik, Compose and shell scripts. QuickStack is a structured platform you can extend — with clusters when you scale.',
    tags: ['Multi-node cluster', 'Network policies', 'Registry support'],
  },
  {
    number: '03',
    title: 'Indie developers & side projects',
    description:
      'You have a VPS and want to ship without cloud PaaS prices or managing Kubernetes by hand. QuickStack gives you deploy-from-Git without the lock-in or monthly bill.',
    tags: ['Single server', 'Git deploy', 'Low cost'],
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

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
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
