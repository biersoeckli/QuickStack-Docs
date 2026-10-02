import { HomeLayout } from '@/components/layout/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout {...baseOptions()} className="bg-neutral-50 dark:bg-background">
      {children}
    </HomeLayout>
  );
}
