import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GitBranch, SquareActivity, Server, Lock } from 'lucide-react';

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

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      <div className="text-center space-y-3 mb-12 ">
        <Badge className="mb-4">Features</Badge>
        <h2 className="text-3xl md:px-18 md:text-5xl font-bold ">Everything you need to run production apps on your own infrastructure</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          QuickStack covers the full lifecycle: from first deploy to day-to-day operations, team access, and cluster growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, index) => (
          <Card key={index} className="border-border/50">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary flex-shrink-0">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  <CardDescription className="mt-1">{pillar.tagline}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
