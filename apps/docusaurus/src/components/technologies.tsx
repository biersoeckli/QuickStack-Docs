import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

export default function TechnologyHighlight() {

     const { colorMode } = useColorMode();
     const isDarkMode = colorMode === 'dark';

     return (
          <div className="text-center py-8 px-4">
               <h2 className="text-2xl font-bold mb-4 py-6">Built With Powerful OpenSource Technologies</h2>
               <div className='flex justify-center items-center pb-2 gap-14 flex-wrap'>
                    <Link to="https://k3s.io/">
                         <img alt="k3s Logo" src="/img/tech-stack/k3s-logo.svg" className="h-12" />
                    </Link>
                    <Link to="https://longhorn.io/">
                         <img alt="Longhorn Logo" src={isDarkMode ? "/img/tech-stack/longhorn-logo-light.png" : "/img/tech-stack/longhorn-logo.png"} className="h-12" />
                    </Link>
                    <Link to="https://github.com/moby/buildkit">
                         <img alt="Buildkit Logo" src="/img/tech-stack/buildkit-logo.png" className="h-14" />
                    </Link>
                    <Link to="https://github.com/distribution/distribution">
                         <img alt="registry Logo" src="/img/tech-stack/registry-logo.png" className="h-16" />
                    </Link>

               </div>
          </div>
     );
}