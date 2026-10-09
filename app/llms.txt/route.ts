import { source } from '@/lib/source';
import { llms } from 'fumadocs-core/source';
import { pillars } from '@/components/landing/features-section';
import { howItWorksSteps } from '@/components/landing/how-it-works-section';
import { faqs } from '@/components/landing/faq-section';
import { useCases } from '@/components/landing/use-cases-section';

export const revalidate = false;

export function GET() {
  const llmsForDocs = llms(source).index();

  const featuresText = pillars.map(pillar =>
    `## ${pillar.title}\n${pillar.tagline}\n${pillar.items.map(item => `- ${item}`).join('\n')}`
  ).join('\n\n');

  const howItWorksText = howItWorksSteps.map(step =>
    `### ${step.number}. ${step.title}\n${step.description}${step.code ? `\n\`\`\`bash\n${step.code}\n\`\`\`` : ''}`
  ).join('\n\n');

  const faqsText = faqs.map(faq =>
    `**${faq.question}**\n${faq.answer}`
  ).join('\n\n');

  const useCasesText = useCases.map(uc =>
    `### ${uc.title}\n${uc.description}\nTags: ${uc.tags.join(', ')}`
  ).join('\n\n');

  return new Response(`# QuickStack

> QuickStack is a free, GPL-3.0, self-hosted PaaS for deploying and operating containerized applications (from GitHub, Gitlab, Bitbucket and other Git providers) and databases on infrastructure you control. It provides a web UI and REST API.

QuickStack builds applications from Git or deploys container images directly (using a Dockerfile, Railpack or easy deploy feature for Next.JS, Nuxt, React, Angular, SvelteKit and Astro), provisions domains and automatic HTTPS, and provides networking, storage, backups, observability, and access control in one platform. It runs on a single server by default and can grow into a multi-node cluster with distributed (and replicated) storage across the cluster.

## Start here

- [Installation](https://quickstack.dev/docs/tutorials/installation): install on a fresh Ubuntu 24.04+ or Debian 13+ server.
- [First app from Git](https://quickstack.dev/docs/tutorials/first-app-from-git): connect a repository, select a build method, and deploy it.
- [First app from image](https://quickstack.dev/docs/tutorials/first-app-from-image): deploy an existing image from a container registry.
- [Project Canvas & App Drawer](https://quickstack.dev/docs/how-to/project-canvas): create, configure, deploy, and monitor workloads from a project's central view.
- [App & Database Templates](https://quickstack.dev/docs/how-to/templates): deploy preconfigured applications and databases in a few clicks.

## Platform model

- A project contains apps, databases, and, on the canary channel, Agent Sandboxes.
- Git-source apps are built with Framework builds, Railpack, or a Dockerfile through BuildKit, then stored in the internal registry. Image-source apps and templates pull their images directly.
- Clicking **Deploy** applies the saved configuration and performs a Kubernetes rolling update. Settings are staged until deployment.
- Traefik routes HTTP(S) traffic and obtains Let's Encrypt certificates. Internal workload networking is deny-by-default; node ports expose non-HTTP services.
- App data uses Kubernetes volumes: local-path on single-node installs and Longhorn for distributed multi-node storage. Backups target S3-compatible object storage.
- QuickStack stores its control-plane configuration in SQLite and backs it up separately from application data.

## Key concepts and operations

- [Architecture](https://quickstack.dev/docs/concepts/architecture): k3s, Traefik, Longhorn, BuildKit, Railpack, registry, data locations, and the deployment pipeline.
- [Projects, Apps & Databases](https://quickstack.dev/docs/concepts/projects-apps-databases): QuickStack's workload and ownership model.
- [Security Model](https://quickstack.dev/docs/concepts/security-model): access control, workload isolation, TLS, and data residency.
- [Deployments](https://quickstack.dev/docs/how-to/deployments/build-methods): build methods, container configuration, redeploys, rollbacks, scaling, and webhooks.
- [Networking](https://quickstack.dev/docs/how-to/networking): domains, quickstack.me subdomains, policies, basic auth, and node ports.
- [Storage](https://quickstack.dev/docs/how-to/storage/volumes): volumes, shared volumes, file browser, and file mounts.
- [Backups](https://quickstack.dev/docs/how-to/backups/overview): S3 targets plus volume, database, system, download, and restore workflows.
- [Administration](https://quickstack.dev/docs/how-to/admin/updates-and-maintenance): cluster add-ons and monitoring, nodes, users and groups, SSO, 2FA, updates, and password resets.

## Automation and experimental features

- [REST API & SDK](https://quickstack.dev/docs/rest-api/overview): automate projects and app workloads with API keys and the JavaScript/TypeScript SDK.
- [MCP Server (Canary)](https://quickstack.dev/docs/mcp-server): connect AI clients through the Model Context Protocol.
- [Agent Sandbox (Canary)](https://quickstack.dev/docs/how-to/agents): run isolated Agent Sandbox instances, optionally with gVisor and an LLM Gateway. These features require the canary channel and should be treated as experimental.

## Planning

- [Sizing & Costs](https://quickstack.dev/docs/reference/sizing-and-costs): minimum server requirements, workload sizing, storage, high availability, and cost guidance.
- [Why QuickStack?](https://quickstack.dev/docs/reference/comparison): comparison with managed platforms, self-hosted PaaS tools, and raw Kubernetes.

# Features

${featuresText}

# How It Works

${howItWorksText}

# Use Cases

${useCasesText}

# Frequently Asked Questions

${faqsText}

${llmsForDocs}`);
}
