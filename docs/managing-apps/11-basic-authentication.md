---
sidebar_position: 11
title: "Basic Authentication"
description: "Learn how to protect your QuickStack applications with HTTP Basic Authentication."
keywords: ["QuickStack", "basic auth", "HTTP authentication", "password protection", "security", "access control"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Basic Authentication in QuickStack"
  description="Guide on configuring HTTP Basic Authentication to protect your applications with username and password credentials."
  keywords="QuickStack, basic auth, HTTP authentication, password protection, security, access control, Traefik middleware"
  datePublished="2026-01-31"
  dateModified="2026-01-31"
  articleSection="Managing Apps"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Beginner"
  dependencies="Deployed App"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/managing-apps/basic-authentication"
  about={["Application Security", "HTTP Authentication", "Access Control"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Basic Authentication

Basic Authentication adds a simple username/password protection layer in front of your application. This is useful for protecting staging environments, admin panels, or any application that should not be publicly accessible without credentials.

## Overview

When enabled, visitors to your application will see a browser-native login prompt before accessing any content. QuickStack implements this using Traefik middleware, which means the authentication happens at the ingress level before requests reach your application.

:::info How it Works
Basic Authentication credentials are handled by the Traefik reverse proxy. Your application receives requests only after successful authentication, with no changes needed to your application code.
:::

## Configuring Basic Authentication

### Adding Credentials

1.  **Navigate to Your Application:**
    Open your project dashboard and select the application you want to protect.

2.  **Go to Advanced Tab:**
    Click on the **Advanced** tab in the application details.

3.  **Locate Basic Authentication Section:**
    Scroll to the **Basic Authentication** card.

4.  **Add Auth Credential:**
    Click the **Add Auth Credential** button.

5.  **Enter Credentials:**
    *   **Username:** Enter the desired username.
    *   **Password:** Enter a secure password.

6.  **Save and Deploy:**
    *   Click **Save** to store the credentials.
    *   Redeploy the application for changes to take effect.


:::warning Redeployment Required
All changes to Basic Authentication (adding, editing, or removing credentials) require a redeployment of the application to take effect.
:::

## Use Cases

### Protecting Staging Environments

Prevent unauthorized access to your staging or development environments:

```
Username: staging
Password: [strong-random-password]
```

### Restricting Admin Panels

Add an extra layer of security to admin interfaces:

```
Username: admin
Password: [strong-random-password]
```

### Temporary Access

Provide temporary access to clients or testers with credentials that can be easily revoked.

## Security Considerations

:::danger Limitations
- Basic Authentication transmits credentials with every request (Base64 encoded, not encrypted).
- Always use HTTPS to encrypt the connection.
- Consider using application-level authentication for sensitive data.
- Basic Auth is not suitable as the sole authentication for highly sensitive applications.
:::

:::tip Recommendations
- Use strong, unique passwords
- Regularly rotate credentials
- Remove credentials that are no longer needed
- Combine with other security measures for sensitive applications
:::

## Troubleshooting

### Login Prompt Not Appearing

- Ensure the application has been redeployed after adding credentials.
- Clear your browser cache or try in an incognito window.
- Verify at least one credential is configured.

### Invalid Credentials Error

- Double-check the username and password (they are case-sensitive).
- View the password using the eye icon to verify it matches what you're entering.
- Ensure there are no leading/trailing spaces in your credentials.
