import React, { JSX } from 'react';
import { Boxes, GitBranch, ListChecks, Terminal, ShieldCheck, Cpu, MonitorCheck, Database, Server, Blocks, SquareActivity } from 'lucide-react';



export default function SetupVideo(): JSX.Element {
    return (
        <div className="text-center space-y-2 pb-5">
            <h2 className="text-2xl font-bold mb-1 pt-6">Installation Demo</h2>
            <p className="text-slate-700 dark:text-slate-300 pb-6">
                Watch our demo to see the QuickStack installation process and a sample application deployment. Learn how QuickStack simplifies server management and app deployment in minutes.
            </p>
            <div className="flex justify-center">
                <iframe width="560"
                    height="315"
                    src="https://www.youtube.com/embed/koqGZ2ChHvw?si=44prf579KAtnBlpO" title="QuickStack Installation Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </div>
        </div>
    );
}