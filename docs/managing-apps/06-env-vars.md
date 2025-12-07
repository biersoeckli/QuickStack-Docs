---
sidebar_position: 6
title: "Env Vars"
description: "Learn how to manage environment variables for your QuickStack applications."
keywords: ["QuickStack", "configuration", "environment variables", "env vars"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Environment Variables in QuickStack"
  description="Guide on managing environment variables for QuickStack applications."
  keywords="QuickStack, configuration, environment variables, env vars"
  datePublished="2025-12-06"
  dateModified="2025-12-06"
  articleSection="Managing Apps"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Beginner"
  dependencies="Deployed App"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/managing-apps/env-vars"
  about={["Application Configuration", "Environment Variables", "Networking"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Environment Variables

Environment variables are key-value pairs that are available to your application at runtime. They are commonly used to store configuration secrets, API keys, and other settings that vary between environments (e.g., development vs. production), following the [12-factor app](https://12factor.net/config) methodology.

### Adding Environment Variables

1.  **Navigate to the App:**
    *   Open your project dashboard and select the application you want to configure.
2.  **Go to Environment Tab:**
    *   Click on the **Environment** tab in the navigation menu.
3.  **Edit Variables:**
    *   You will see a text area where you can enter your variables.
    *   Enter each variable on a new line in the format `KEY=VALUE`.
    *   Example:
        ```env
        DATABASE_URL=postgres://user:pass@host:5432/db
        API_KEY=secret-api-key-123
        DEBUG=true
        ```
4.  **Save:**
    *   Click the **Save** button to store your changes.

:::warning Redeployment Required
Changing environment variables does not update the running application immediately. You must **Deploy** the application again for the new variables to take effect.
:::

:::info Database Apps
For database applications deployed via templates, it is generally recommended **not** to modify environment variables manually, as this might break the pre-configured setup.
:::
