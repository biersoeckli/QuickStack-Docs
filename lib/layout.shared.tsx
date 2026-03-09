import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, PlayIcon } from 'lucide-react';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'biersoeckli',
  repo: 'QuickStack-Docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <img 
            src="/img/quickstack-icon-dark.svg" 
            alt="QuickStack" 
            className="w-6 h-6 dark:hidden"
          />
          <img 
            src="/img/quickstack-icon-light.svg" 
            alt="QuickStack" 
            className="w-6 h-6 hidden dark:block"
          />
          <span className="font-semibold">QuickStack</span>
        </div>
      ),
    },
    links: [
      {
        icon: <PlayIcon />,
        text: 'Getting Started',
        url: '/docs/tutorials/installation',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <BookIcon />,
        text: 'Docs',
        url: '/docs',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/QuickStack`,
  };
}
