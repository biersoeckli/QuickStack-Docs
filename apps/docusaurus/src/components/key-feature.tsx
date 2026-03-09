import React, { JSX } from 'react';
import { Boxes, GitBranch, ListChecks, Terminal, ShieldCheck, Cpu, MonitorCheck, Database, Server, Blocks, SquareActivity } from 'lucide-react';


const features = [
    {
        icon: Terminal,
        title: 'One-Command Installation',
        description: 'Deploy QuickStack on your server with a single command, making setup quick and easy.',
    },
    {
        icon: GitBranch,
        title: 'Seamless Git Integration',
        description: 'Seamlessly deploy applications directly from public and private Git repositories, streamlining your workflow.',
    },
    {
        icon: SquareActivity ,
        title: 'Real-time App Monitoring',
        description: 'Keep a close eye on your running containers with detailed metrics, including CPU, RAM, and storage usage. Benefit from real-time logs and an integrated web terminal for immediate insights and troubleshooting.',
    },
    {
        icon: ShieldCheck,
        title: 'Automatic SSL Certificates',
        description: "Automatic SSL Certificates: Secure your applications effortlessly with automatic SSL certificate generation using Let's Encrypt, ensuring your deployments are secure and trusted.",
    },
    {
        icon: Database,
        title: 'Persistent Data Storage',
        description: 'Ensure data persistence across all your deployments with cluster-wide persistent storage volumes via Longhorn, protecting your critical data.',
    },
    {
        icon: Server,
        title: 'Scalable Cluster Support',
        description: 'Easily scale applications across multiple server nodes while maintaining persistent data storage on all nodes and benefiting from automatic load balancing for optimal performance.',
    }
];



export default function KeyFeature(): JSX.Element {
    return (
        <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold mb-4 py-6">Powerful Features, Simplified Deployment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <article key={index} className="rounded-md border p-4 hover:bg-slate-50 dark:hover:bg-[#1b1b1d] transition-colors">
                        <div className="flex justify-center pb-2">
                            <feature.icon size="30px" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-md text-slate-700 dark:text-slate-300">{feature.description}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}