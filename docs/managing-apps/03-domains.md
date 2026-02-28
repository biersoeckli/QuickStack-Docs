---
sidebar_position: 3
title: "Domains"
description: "Manage domains for your QuickStack applications to make them accessible over the internet."
keywords: ["QuickStack", "domains", "SSL", "HTTPS", "subdomains", "reverse proxy"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Managing Domains for QuickStack Applications"
  description="Learn how to configure and manage domains, subdomains, and SSL certificates for your QuickStack applications to make them accessible over the internet."
  keywords="QuickStack, domains, SSL, HTTPS, subdomains, reverse proxy, DNS configuration, Traefik"
  datePublished="2025-06-17"
  dateModified="2025-06-17"
  articleSection="Managing Apps"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Beginner"
  dependencies="Domain Registrar, DNS Provider"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/managing-apps/03-domains"
  about={["Domain Name System", "SSL Certificates", "Reverse Proxy", "Web Applications"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Domains

Exposing an app on a custom domain requires three steps in order: configure DNS, add the domain in QuickStack, then Deploy.

:::tip QuickStack.me Domain
No custom domain? Use the built-in **[QuickStack.me Domain](./04-quickstack-me.md)** for instant HTTPS — no DNS setup needed.
:::

## DNS checklist

Before adding a domain in QuickStack, create an **A record** at your DNS provider:

| Record type | Hostname | Value |
|-------------|----------|-------|
| A | `app.example.com` | Your server's public IP |

DNS propagation can take a few minutes to several hours. Verify resolution before proceeding.

## QuickStack UI steps

1. Open the app and click the **Domains** tab.
2. Click **Add Domain** to open the Edit Domain dialog.
3. Fill in the fields:
   - **Hostname** — the domain or subdomain (e.g. `app.example.com`)
   - **App Port** — the internal container port your app listens on (e.g. `3000`)
   - **Use HTTPS** — when enabled, QuickStack automatically provisions a Let's Encrypt certificate
   - **Redirect HTTP to HTTPS** — when enabled, all HTTP traffic is redirected to HTTPS (requires **Use HTTPS**)
4. Click **Save**.

<img  src="/img/docs/managing-apps/creating-apps/domains-overview.png" alt="QuickStack Domains Tab" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

<img  src="/img/docs/managing-apps/domains/edit-domains.png" alt="QuickStack Edit Domain Dialog" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

## Deploy applies changes

:::info
Domain changes are not applied until you click **Deploy**. The app must be redeployed for the new domain to become active.
:::

## Troubleshooting

| Problem | Action |
|---------|--------|
| Domain does not resolve | Wait for DNS propagation; verify A record points to the correct server IP |
| Domain resolves but app not reachable | Check that **App Port** matches the port your container actually listens on |
| HTTPS certificate fails | Ensure Let's Encrypt email is configured in **Settings** → **QuickStack Server** → **Networking / Traefik** |
| Still not working | Open an issue on [GitHub](https://github.com/biersoeckli/quickstack/issues) |

## Related

- [QuickStack.me domain](./04-quickstack-me.md) — free built-in subdomain with automatic HTTPS
- [Networking & internal ports](./07-networking.md)

