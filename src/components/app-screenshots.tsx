
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { useWindowSize } from '@docusaurus/theme-common';

export function AppScreenshots() {
    const windowSize = useWindowSize();

    if (windowSize === 'mobile') {
        return <div className='flex flex-col items-center'>
            <Tabs>
                <TabItem value="gitDeployment" label="Git Deployment" default>
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/1.png" alt="Git Deployment" />
                </TabItem>
                <TabItem value="appLogs" label="App Logs">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/2.png" alt="App Logs" />
                </TabItem>
                <TabItem value="integratedWebTerminal" label="Integrated Web Terminal">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/3.png" alt="Integrated Web Terminal" />
                </TabItem>
            </Tabs>
            <Tabs>
                <TabItem value="databaseDeployment" label="Database Deployment">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/4.png" alt="Database Deployment" />
                </TabItem>
                <TabItem value="serverMonitoring" label="Server Monitoring">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/5.png" alt="Server Monitoring" />
                </TabItem>
                <TabItem value="backups" label="Backups">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/6.png" alt="Server Monitoring" />
                </TabItem>
            </Tabs>
        </div>
    }
    return (
        <div className='flex flex-col items-center'>
            <Tabs>
                <TabItem value="gitDeployment" label="Git Deployment" default>
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/1.png" alt="Git Deployment" />
                </TabItem>
                <TabItem value="appLogs" label="App Logs">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/2.png" alt="App Logs" />
                </TabItem>
                <TabItem value="integratedWebTerminal" label="Integrated Web Terminal">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/3.png" alt="Integrated Web Terminal" />
                </TabItem>
                <TabItem value="databaseDeployment" label="Database Deployment">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/4.png" alt="Database Deployment" />
                </TabItem>
                <TabItem value="serverMonitoring" label="Server Monitoring">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/5.png" alt="Server Monitoring" />
                </TabItem>
                <TabItem value="backups" label="Backups">
                    <img className='w-full max-w-[70rem]' src="/img/app-screenshots/6.png" alt="Server Monitoring" />
                </TabItem>
            </Tabs>
        </div>
    );
}