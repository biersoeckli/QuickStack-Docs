import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Do I need Kubernetes knowledge to use QuickStack?',
    answer: 'No. QuickStack runs on k3s under the hood, but you interact entirely through a web UI. You do not write Kubernetes manifests or run kubectl commands for day-to-day operations.',
  },
  {
    question: 'Can I deploy from Git repositories and Docker images from Docker Hub?',
    answer: 'Yes. QuickStack supports both. You can connect a Git repository (GitHub, GitLab, or any other Git host) and trigger builds on push via webhooks, or you can pull an image directly from Docker Hub or a private container registry.',
  },
  {
    question: 'Does QuickStack handle HTTPS automatically?',
    answer: 'Yes. QuickStack provisions SSL certificates via Let\'s Encrypt automatically when you add a domain. You do not need to configure Traefik, Nginx, or Certbot manually.',
  },
  {
    question: 'Can I run databases?',
    answer: 'Yes. QuickStack includes database templates for PostgreSQL, MySQL, Redis, and others. You can deploy a database instance with one click and connect it to your apps using internal service networking.',
  },
  {
    question: 'How do backups work?',
    answer: 'QuickStack supports scheduled backups for both application volumes and databases. Backups can be stored on S3-compatible object storage. You can restore from any backup directly through the UI.',
  },
  {
    question: 'Is QuickStack suitable for teams?',
    answer: 'Yes. QuickStack includes user and group management with granular per-project permissions, and supports two-factor authentication. You can give team members access to specific projects without giving them full admin access.',
  },
  {
    question: 'Can I start on one server and scale to a cluster later?',
    answer: 'Yes. QuickStack runs on a single server and supports adding nodes to form a multi-node cluster. Persistent storage volumes are managed by Longhorn and are accessible across all nodes in the cluster.',
  },
  {
    question: 'Is QuickStack open source?',
    answer: 'Yes. QuickStack is open source and available on GitHub. It is licensed under the GPL-3.0 license. Contributions and feedback are welcome!',
  },
];

export function FaqSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
      <div className="text-center space-y-3 mb-12">
        <Badge className="mb-4">FAQ</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Card className="border-border/50 p-0">
          <CardContent className="p-0">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={index} className="border-b last:border-0 px-6">
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                  <p className='sr-only'>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
