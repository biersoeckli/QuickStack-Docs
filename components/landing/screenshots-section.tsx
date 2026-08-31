import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eyebrow } from './shared';

const tabs = [
  { value: 'git', label: 'Git Deploy', src: '/img/app-screenshots/1.png', alt: 'Git Deployment' },
  { value: 'logs', label: 'App Logs', src: '/img/app-screenshots/2.png', alt: 'App Logs' },
  { value: 'terminal', label: 'Terminal', src: '/img/app-screenshots/3.png', alt: 'Integrated Web Terminal' },
  { value: 'database', label: 'Database', src: '/img/app-screenshots/4.png', alt: 'Database Deployment' },
  { value: 'monitoring', label: 'Monitoring', src: '/img/app-screenshots/5.png', alt: 'Server Monitoring' },
  { value: 'backups', label: 'Backups', src: '/img/app-screenshots/6.png', alt: 'Backups' },
];

export function ScreenshotsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Eyebrow className="mb-5">Interface</Eyebrow>
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
            QuickStack in action.
          </h2>
        </div>
      </div>

      <Tabs defaultValue="git" className="w-full">
        <TabsList
          variant="line"
          className="mb-6 h-auto w-full max-w-none flex-wrap justify-start gap-1 rounded-none border-b border-border pb-0"
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="h-auto rounded-none px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] data-active:text-foreground"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-2">
              <Image
                src={tab.src}
                alt={tab.alt}
                width={1200}
                height={800}
                className="w-full rounded-lg"
              />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
