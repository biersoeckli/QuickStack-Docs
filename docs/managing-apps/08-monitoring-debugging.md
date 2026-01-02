---
sidebar_position: 8
title: "Monitoring & Debugging"
description: "Learn how to monitor application logs and use the interactive terminal for debugging in QuickStack."
keywords: ["QuickStack", "logs", "terminal", "debugging", "monitoring", "shell", "bash", "sh"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Monitoring & Debugging Applications in QuickStack"
  description="Guide on using the built-in log viewer and interactive terminal to monitor and debug running applications."
  keywords="QuickStack, logs, terminal, debugging, monitoring, shell, bash, sh, live logs"
  datePublished="2025-12-06"
  dateModified="2025-12-06"
  articleSection="Managing Apps"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Intermediate"
  dependencies="Running Application"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/managing-apps/monitoring-debugging"
  about={["Application Logging", "Remote Shell", "Debugging"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Monitoring & Debugging

QuickStack provides powerful built-in tools to help you monitor the health of your applications and debug issues in real-time. You can access live logs, view real-time status updates, and even open an interactive shell session directly from your browser.

## Application Status Indicators

QuickStack displays real-time status information for all your applications. Status updates appear immediately when pod states change, without requiring page refreshes. The status of your applications are visible in the projects overview, project detail or app detail pages.

<img  src="/img/docs/managing-apps/monitoring-and-debugging/app-monitoring.png" alt="QuickStack App Settings" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '700px',
    width: '90%'
}} />

## Live Application Logs

The **Logs** viewer allows you to see the standard output (stdout) and standard error (stderr) streams from your running containers. This is usually the first place to look when troubleshooting an application.

### Accessing Logs

1.  **Navigate to the App:**
    *   Open your project dashboard and select the application.
2.  **Overview Tab:**
    *   The logs are displayed by default on the **Overview** tab.
3.  **Select Pod:**
    *   If your application is running multiple replicas (pods), use the dropdown menu to select which pod's logs you want to view.
    *   The status of the pod (e.g., `Running`, `Pending`) is also displayed here.

<img  src="/img/docs/managing-apps/monitoring-and-debugging/logs-example.png" alt="QuickStack App Settings" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '700px',
    width: '90%'
}} />

## Interactive Terminal

For more advanced debugging, QuickStack offers an interactive **Terminal** that connects directly to your running container. This allows you to execute commands, check file systems, and verify network connectivity from inside the app's environment.

### Opening a Terminal Session

1.  **Navigate to the App:**
    *   Open your project dashboard and select the application.
2.  **Overview Tab:**
    *   Locate the **Logs** card.
3.  **Launch Terminal:**
    *   Click the **Terminal** button next to the pod selector.
    *   *Note: This button is only visible if you have **Write** permissions for the application.*

<img  src="/img/docs/managing-apps/monitoring-and-debugging/select-terminal.png" alt="QuickStack App Settings" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '700px',
    width: '90%'
}} />

### Using the Terminal

Once the terminal dialog opens, you will be presented with options to start a shell session:

*   **Start sh:** Launches a standard Bourne shell (`/bin/sh`). This is available on almost all Linux containers (including Alpine).
*   **Start bash:** Launches the Bourne Again Shell (`/bin/bash`). Use this if your container image includes bash for a more feature-rich experience.

After clicking one of the buttons, the terminal window will connect, and you can start typing commands just like you would in a local terminal.

<img  src="/img/docs/managing-apps/monitoring-and-debugging/terminal-example.png" alt="QuickStack App Settings" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '800px',
    width: '90%'
}} />

### Disconnecting

To end your session, click the **Disconnect Session** button or simply close the dialog window.

## Limitations

*   **Permissions:** The Terminal feature requires **Write** access to the project. Read-only users cannot execute commands in containers.
*   **Container State:** You can only connect to containers that are in a `Running` state. If a container is crashing or restarting loop, you may not be able to establish a connection.
*   **Shell Availability:** The `bash` option requires the `bash` binary to be installed in your container image. If it fails, try using `sh` instead.
