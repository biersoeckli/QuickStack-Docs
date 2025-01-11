import clsx from 'clsx';
import React from 'react';

export default function SectionWrapper({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={clsx('flex w-full flex-col items-center pt-12 ', className)}>
            <div className="w-full max-w-8xl px-2 lg:px-4">
                {children}
            </div>
        </section>
    );
}