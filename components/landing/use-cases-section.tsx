import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code2, Users, Wrench } from 'lucide-react';

export const useCases = [
  {
    icon: Code2,
    title: 'Indie developers and side projects',
    description: 'You have a VPS and want to ship a side project without paying cloud PaaS prices or managing Kubernetes manually. QuickStack gives you the same deploy-from-Git workflow without the vendor lock-in or monthly bill.',
    tags: ['Single server', 'Git deploy', 'Low cost'],
  },
  {
    icon: Users,
    title: 'Small teams who want Heroku-like DX on their own infra',
    description: 'Your team wants push-to-deploy, automatic HTTPS, environment variables, logs, and backups, but on infrastructure you control. QuickStack provides that without forcing anyone to learn cluster management.',
    tags: ['Team access', 'Permissions', 'Backups'],
  },
  {
    icon: Wrench,
    title: 'DevOps and platform engineers who want more control',
    description: 'You are comfortable with servers but tired of gluing together Traefik, Docker Compose, and shell scripts. QuickStack provides a structured platform you can extend — with cluster support when you need to scale.',
    tags: ['Multi-node cluster', 'Network policies', 'Registry support'],
  },
];

export function UseCasesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
      <div className="text-center space-y-3 mb-12">
        <Badge className="mb-4">Who it&apos;s for</Badge>
        <h2 className="text-3xl md:text-5xl font-bold">Who uses QuickStack</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          QuickStack fits teams and individuals who want production-grade deployment tooling without handing control to a managed cloud platform.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((uc, index) => (
          <Card key={index} className="border-border/50 flex flex-col">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary mb-3">
                <uc.icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-base">{uc.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between gap-4">
              <CardDescription className="text-sm leading-relaxed">
                {uc.description}
              </CardDescription>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {uc.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
