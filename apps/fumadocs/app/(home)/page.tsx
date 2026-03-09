import Link from 'next/link';
import { ArrowRight, Rocket, Shield, Server, Workflow } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const features = [
  { title: 'Deploy in Sekunden', text: 'Apps direkt aus Git oder Images deployen – ohne Kubernetes-Overhead.', icon: Rocket },
  { title: 'Sicher & Kontrolliert', text: 'Eigene Server, eigene Daten. Inklusive Domain-, TLS- und Auth-Workflows.', icon: Shield },
  { title: 'Cluster-ready', text: 'Mehrere Nodes, zentrale Verwaltung und klare Health-Checks.', icon: Server },
  { title: 'Developer Workflow', text: 'Webhooks, Rollbacks und reproduzierbare Deployments in einem UI.', icon: Workflow },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">QuickStack Documentation</p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">Deploy Apps on any Server</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-300">
          Die Dokumentation wurde auf <span className="text-primary">Next.js + Fumadocs</span> migriert. Modernes, cleanes Layout mit QuickStack-Farben und klaren Einstiegspfaden.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/docs">Zur Dokumentation <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/docs/tutorials/installation">Quick Start</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-24 md:grid-cols-2">
        {features.map(({ title, text, icon: Icon }) => (
          <Card key={title}>
            <Icon className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-slate-300">{text}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
