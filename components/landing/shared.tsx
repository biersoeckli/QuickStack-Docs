import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusDot({
  className,
  pulse = false,
}: {
  className?: string;
  pulse?: boolean;
}) {
  return (
    <span className={cn('relative inline-flex size-1.5 shrink-0', className)}>
      {pulse && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
      )}
      <span className="relative inline-flex size-1.5 rounded-full bg-current" />
    </span>
  );
}
