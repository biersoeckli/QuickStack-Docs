import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const howItWorksSteps = [
  {
    number: '1',
    title: 'Install QuickStack on a fresh server',
    description: 'Run a single command on your VPS or bare-metal server. QuickStack sets up the full platform.',
    code: 'curl -sfL https://get.quickstack.dev/setup.sh | sh -',
  },
  {
    number: '2',
    title: 'Connect a Git repository or container image',
    description: 'Point QuickStack at a GitHub, GitLab, or any other Git repo, or pull directly from Docker Hub or a private container registry. Select a database template to deploy PostgreSQL, MySQL, Redis, and others with one click.',
  },
  {
    number: '3',
    title: 'Deploy — everything else is handled',
    description: 'QuickStack builds your app, provisions a domain, issues an HTTPS certificate, starts the container, and gives you logs, a terminal, metrics, and backup configuration — all in the same UI.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30 max-w-7xl rounded-lg">
      <div className="text-center space-y-3 mb-12">
        <Badge className="mb-4">Get started</Badge>
        <h2 className="text-3xl md:text-5xl font-bold">How it works</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          From a blank server to a running app in minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {howItWorksSteps.map((step, index) => (
          <Card key={index} className="border-border/50">
            <CardHeader>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-primary border-2 border-primary/40 bg-primary/10 mb-3">
                {step.number}
              </div>
              <CardTitle className="text-base">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-sm leading-relaxed">
                {step.description}
              </CardDescription>
              {step.code && (
                <code className="block text-xs bg-muted border border-border rounded-md px-3 py-2.5 font-mono break-all">
                  {step.code}
                </code>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Demo */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden border border-border shadow-lg bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/koqGZ2ChHvw?si=44prf579KAtnBlpO"
            title="QuickStack Installation Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="text-center">
        <Link href="/docs/tutorials/installation">
          <Button>
            Installation Guide
          </Button>
        </Link>
      </div>
    </section>
  );
}
