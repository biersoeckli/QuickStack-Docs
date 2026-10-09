import { LifecycleCanvas } from './lifecycle-canvas';
import { Eyebrow } from './shared';

export function LifecycleSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="max-w-xl">
          <Eyebrow className="mb-5">One platform, full lifecycle</Eyebrow>
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-foreground md:text-5xl">
            Your infrastructure grows with your app.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Start with one app. Add a database, introduce Redis when you need a
            fast cache, then connect more microservices as the product evolves.
            All from the same platform.
          </p>
        </div>
        <LifecycleCanvas />
      </div>
    </section>
  );
}
