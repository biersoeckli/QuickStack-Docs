import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'biersoeckli',
  repo: 'QuickStack',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'QuickStack',
    },
    links: [
      {
        icon: <BookIcon />,
        text: 'Docs',
        url: '/docs',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
