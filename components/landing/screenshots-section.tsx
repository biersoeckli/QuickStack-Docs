import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ScreenshotsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">QuickStack in Action</h2>
      </div>
      
      <Tabs defaultValue="git" className="w-full">
        <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 lg:grid-cols-6 mb-8">
          <TabsTrigger value="git">Git Deploy</TabsTrigger>
          <TabsTrigger value="logs">App Logs</TabsTrigger>
          <TabsTrigger value="terminal">Terminal</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="backups">Backups</TabsTrigger>
        </TabsList>
        
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <TabsContent value="git" className="mt-0">
              <Card className="border-border/50">
                <CardContent className="p-2">
                  <Image 
                    src="/img/app-screenshots/1.png" 
                    alt="Git Deployment" 
                    width={1200} 
                    height={800}
                    className="w-full rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="logs" className="mt-0">
              <Card className="border-border/50">
                <CardContent className="p-2">
                  <Image 
                    src="/img/app-screenshots/2.png" 
                    alt="App Logs" 
                    width={1200} 
                    height={800}
                    className="w-full rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="terminal" className="mt-0">
              <Card className="border-border/50">
                <CardContent className="p-2">
                  <Image 
                    src="/img/app-screenshots/3.png" 
                    alt="Integrated Web Terminal" 
                    width={1200} 
                    height={800}
                    className="w-full rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="database" className="mt-0">
              <Card className="border-border/50">
                <CardContent className="p-2">
                  <Image 
                    src="/img/app-screenshots/4.png" 
                    alt="Database Deployment" 
                    width={1200} 
                    height={800}
                    className="w-full rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="monitoring" className="mt-0">
              <Card className="border-border/50">
                <CardContent className="p-2">
                  <Image 
                    src="/img/app-screenshots/5.png" 
                    alt="Server Monitoring" 
                    width={1200} 
                    height={800}
                    className="w-full rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="backups" className="mt-0">
              <Card className="border-border/50">
                <CardContent className="p-2">
                  <Image 
                    src="/img/app-screenshots/6.png" 
                    alt="Backups" 
                    width={1200} 
                    height={800}
                    className="w-full rounded-md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
}
