'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Eyebrow } from './shared';

const screenshots = [
  {
    title: 'Actions stay close to the canvas',
    description:
      'Deploy, rebuild, inspect logs or update settings from a clear context menu on each app.',
    src: '/img/app-screenshots/project-canva-context-menu.png',
    alt: 'QuickStack project canvas context menu',
    category: 'Project canvas',
  },
  {
    title: 'Keep source and runtime in sync',
    description:
      'Review your repository, branch and framework settings without leaving the project view.',
    src: '/img/app-screenshots/app-drawer-settings.png',
    alt: 'QuickStack app settings panel',
    category: 'Configuration',
  },
  {
    title: 'Logs are part of the workflow',
    description:
      'Read live runtime logs and open a terminal exactly where you manage the app.',
    src: '/img/app-screenshots/app-drawer-logs.png',
    alt: 'QuickStack app logs panel',
    category: 'Observability',
  },
  {
    title: 'Choose the source that fits',
    description:
      'Connect a Git repository over HTTPS or SSH, or deploy a container image from your registry.',
    src: '/img/app-screenshots/app-choose-source.png',
    alt: 'QuickStack dialog for choosing an app source',
    category: 'App setup',
  },
  {
    title: 'Start with the right framework',
    description:
      'Pick a framework preset and get the build configuration you need without the boilerplate.',
    src: '/img/app-screenshots/app-source-choose-framework.png',
    alt: 'QuickStack dialog for choosing a framework',
    category: 'App setup',
  },
  {
    title: 'Databases are ready when you are',
    description:
      'Provision PostgreSQL, MySQL, Redis and more from a focused database catalog.',
    src: '/img/app-screenshots/create-database-from-template.png',
    alt: 'QuickStack database template picker',
    category: 'App catalog',
  },
  {
    title: 'Deploy popular apps in a few clicks',
    description:
      'Browse ready-to-run application templates instead of starting from an empty configuration.',
    src: '/img/app-screenshots/create-app-from-template.png',
    alt: 'QuickStack application template picker',
    category: 'App catalog',
  },
  {
    title: 'Follow every deployment',
    description:
      'Check detailed deployment output without losing the wider context of your project.',
    src: '/img/app-screenshots/deployment-logs.png',
    alt: 'QuickStack deployment log panel',
    category: 'Observability',
  },
  {
    title: 'Manage apps where they live',
    description:
      'Open an app directly from the canvas to deploy, inspect activity and change configuration.',
    src: '/img/app-screenshots/app-drawer.png',
    alt: 'QuickStack app drawer with deployment details',
    category: 'App management',
  },
  {
    title: 'Your whole project, at a glance',
    description:
      'See apps, databases and the connections between them on one interactive canvas.',
    src: '/img/app-screenshots/project-canva.png',
    alt: 'QuickStack project canvas showing an app connected to PostgreSQL and Redis',
    category: 'Project canvas',
  },
];

export function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const activeScreenshot = screenshots[activeIndex];

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screenshots.length);
    }, 5_000);

    return () => window.clearInterval(interval);
  }, [isAutoplay]);

  return (
    <section
      aria-label="QuickStack product gallery"
      className="border-y border-border bg-muted/30"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="max-w-xl">
        <Eyebrow className="mb-5">Product tour</Eyebrow>
        <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
          QuickStack in action.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
            {activeScreenshot.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {activeScreenshot.description}
          </p>
        </div>

        <div
          className="flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]"
          aria-label="Choose a product screen"
        >
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => {
                setIsAutoplay(false);
                setActiveIndex(index);
              }}
              className="group relative w-24 shrink-0 snap-start overflow-hidden rounded-lg border bg-muted/40 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:w-28"
              data-active={index === activeIndex || undefined}
              aria-label={`Show ${screenshot.title}`}
              aria-pressed={index === activeIndex}
            >
              <Image
                src={screenshot.src}
                alt=""
                width={300}
                height={185}
                sizes="112px"
                className="aspect-[1.625] w-full origin-top -translate-y-[4.5%] scale-[1.09] object-cover object-top opacity-65 transition duration-200 group-hover:opacity-100 group-data-active:opacity-100"
              />
              <span className="absolute inset-0 rounded-lg ring-2 ring-transparent ring-inset transition group-data-active:ring-foreground" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm md:p-3">
        <div className="relative aspect-[1.625] overflow-hidden rounded-xl bg-muted/40">
          <Image
            key={activeScreenshot.src}
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="origin-top -translate-y-[4.5%] scale-[1.09] object-cover object-top motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent px-4 pb-4 pt-16 md:px-6 md:pb-6">
            <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              {activeScreenshot.category}
            </span>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
