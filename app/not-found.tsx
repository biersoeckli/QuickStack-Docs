import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, FileQuestion, Search, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24 flex items-center justify-center">
        <div className="flex flex-col items-center text-center space-y-8 max-w-2xl">
          {/* Large 404 */}
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary/10 select-none">
              404
            </h1>
          </div>

          {/* Title and description */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Page not found
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link href="/docs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <BookOpen className="h-4 w-4 mr-2" />
                Documentation
              </Button>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
