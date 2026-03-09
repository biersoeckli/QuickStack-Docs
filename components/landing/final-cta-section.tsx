import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function FinalCtaSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <Card className="max-w-3xl mx-auto border-border/50 bg-muted/30">
        <CardHeader className="text-center pb-4">
          <Badge variant="secondary" className="mb-4 mx-auto w-fit">Open Source · Self-hosted · Free</Badge>
          <CardTitle className="text-3xl md:text-4xl">Ready to deploy on your own infrastructure?</CardTitle>
          <CardDescription className="text-base pt-2">
            Install QuickStack on your server in minutes. No managed cloud required.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-3 justify-center pb-8">
          <Link href="/docs/tutorials/installation">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline">
              Read the Docs
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
