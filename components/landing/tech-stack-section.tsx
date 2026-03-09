import Link from 'next/link';
import Image from 'next/image';

const techStack = [
  { name: 'k3s', logo: '/img/tech-stack/k3s-logo.svg', url: 'https://k3s.io/', darkMode: false },
  { name: 'Longhorn', logo: '/img/tech-stack/longhorn-logo.png', logoDark: '/img/tech-stack/longhorn-logo-light.png', url: 'https://longhorn.io/', darkMode: true },
  { name: 'Buildkit', logo: '/img/tech-stack/buildkit-logo.png', url: 'https://github.com/moby/buildkit', darkMode: false },
  { name: 'Registry', logo: '/img/tech-stack/registry-logo.png', url: 'https://github.com/distribution/distribution', darkMode: false },
];

interface TechStackSectionProps {
  theme: 'light' | 'dark';
}

export function TechStackSection({ theme }: TechStackSectionProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Built With Powerful OpenSource Technologies</h2>
      </div>
      
      <div className="flex justify-center items-center gap-8 md:gap-14 flex-wrap">
        {techStack.map((tech) => (
          <Link 
            key={tech.name} 
            href={tech.url} 
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <Image 
              src={tech.darkMode && theme === 'dark' ? tech.logoDark! : tech.logo}
              alt={`${tech.name} Logo`}
              width={300}
              height={300}
              className={tech.name === 'Registry' ? 'h-16 md:h-20 w-auto' : 'h-12 md:h-14 w-auto'}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
