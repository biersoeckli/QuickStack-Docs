import React, { JSX } from 'react';
import { Boxes, GitBranch, ListChecks, Terminal, ShieldCheck, Cpu, MonitorCheck, Database, Server, Blocks, SquareActivity } from 'lucide-react';


const features = [
    {
        icon: Terminal,
        title: 'One-Command Installation',
        description: 'Get up and running quickly with a single command to deploy QuickStack on your Server(s).',
    },
    {
        icon: GitBranch,
        title: 'Seamless Git Integration',
        description: 'Easily deploy applications directly from your Git repositories, both public and private.',
    },
    {
        icon: SquareActivity ,
        title: 'Real-time App Monitoring',
        description: 'Monitor your running containers with CPU, RAM and storage usage as well as real-time logs and an integrated web terminal.',
    },
    {
        icon: ShieldCheck,
        title: 'Automatic SSL Certificates',
        description: "Secure your applications with automatic SSL certificate generation using Let's Encrypt.",
    },
    {
        icon: Database,
        title: 'Persistent Data Storage',
        description: 'Use cluster-wide persistent storage volumes via Longhorn for data persistence across your deployments.',
    },
    {
        icon: Server,
        title: 'Scalable Cluster Support',
        description: 'Easily scale applications across multiple server nodes with persistent data storage on all nodes and automatic load balancing.',
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