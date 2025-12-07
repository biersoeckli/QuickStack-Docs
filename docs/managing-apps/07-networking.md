---
sidebar_position: 7
title: "Networking"
description: "Learn how to configure internal networking and ports for your QuickStack applications."
keywords: ["QuickStack", "networking", "internal port", "container port", "service communication", "internal hostname"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Networking in QuickStack"
  description="Guide on configuring internal networking, container ports, and service-to-service communication in QuickStack applications."
  keywords="QuickStack, networking, internal port, container port, service communication, internal hostname, kubernetes networking"
  datePublished="2025-12-06"
  dateModified="2025-12-07"
  articleSection="Managing Apps"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Beginner"
  dependencies="Deployed App"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/managing-apps/networking"
  about={["Application Networking", "Container Ports", "Service Discovery", "Internal Communication"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Networking

## Internal Container Port

The internal container port is the port on which your application listens for incoming traffic inside the project. QuickStack needs to know this port so that other apps running in the same project can communicate with it.

*   **Default:** Usually `80` or `3000` depending on the application image.
*   **When to change:** If your Docker image is configured to listen on a non-standard port (e.g., `8080`, `5000`), you must update this setting in QuickStack.

### Changing the Port

1.  **Navigate to the App:**
    *   Open your project dashboard and select the application.
2.  **Go to Domains Tab:**
    *   Click on the **Domains** tab.
3.  **Edit Internal Port:**
    *   Locate the **Internal Port** or **App Port** section (often near the top or associated with domain settings).
    *   Click the **Edit** (pencil) icon or the configured port number.
4.  **Update Value:**
    *   Enter the new port number (e.g., `8080`).
    *   Click **Save**.


:::info Internal Hostmanes
To access the application from other apps within the same project, you find a list of internal hostnames at the bottom of the **Domains** tab. Use these hostnames along with the internal port to connect between services.
:::

:::warning Redeployment Required
Like environment variables, changing the internal port requires a **Redeployment** of the application to update the networking configuration.
:::
