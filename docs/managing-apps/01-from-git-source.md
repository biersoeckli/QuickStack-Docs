---
sidebar_position: 1
title: Creating App from Git Source
description: This guide will walk you through deploying an application from a Git repository.
keywords: ["QuickStack Git Deployment", "QuickStack Git Source", "QuickStack Git Deployment Guide"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="HowTo"
  title="Deploying Applications from Git Source with QuickStack"
  description="A comprehensive guide to deploying applications directly from Git repositories using QuickStack's web interface."
  keywords="QuickStack Git Deployment, QuickStack Git Source, QuickStack Git Deployment Guide, containerized applications, Docker deployment"
  datePublished="2025-06-17"
  dateModified="2025-06-17"
  inLanguage="en"
  step={[
    {
      "@type": "HowToStep",
      "name": "Creating a New Project and Application",
      "text": "Create a new project in QuickStack and add a new application to it",
      "url": "https://quickstack.dev/docs/managing-apps/01-from-git-source#step-1-creating-a-new-project-and-application"
    },
    {
      "@type": "HowToStep",
      "name": "Configure Git Source",
      "text": "Configure the Git repository URL, branch, and Dockerfile path for your application",
      "url": "https://quickstack.dev/docs/managing-apps/01-from-git-source#step-1-creating-a-new-project-and-application"
    },
    {
      "@type": "HowToStep",
      "name": "Deploy Your Application",
      "text": "Initiate the build and deployment process for your application",
      "url": "https://quickstack.dev/docs/managing-apps/01-from-git-source#step-3-deploying-your-application"
    },
    {
      "@type": "HowToStep",
      "name": "Check Deployment Status",
      "text": "Monitor the deployment status and view build logs in real-time",
      "url": "https://quickstack.dev/docs/managing-apps/01-from-git-source#step-4-checking-the-deployment-status"
    },
    {
      "@type": "HowToStep",
      "name": "Access Your Application",
      "text": "Access your deployed application via the assigned domain",
      "url": "https://quickstack.dev/docs/managing-apps/01-from-git-source#step-5-accessing-your-application"
    }
  ]}
  tool={["QuickStack", "Git Repository", "Dockerfile"]}
  supply={["QuickStack installed on VPS", "Git repository with application code", "Dockerfile in repository"]}
  proficiencyLevel="Beginner"
  applicationCategory="DeveloperApplication"
  operatingSystem="Linux"
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Git App Deployment

Deploy an application directly from a Git repository. QuickStack clones your repo, builds the Docker image from your Dockerfile, and runs it as a container. Every time you click **Deploy**, the current configuration is applied — changes to settings do not take effect automatically.

## Prerequisites

- QuickStack installed on your VPS.
- A Git repository with a valid `Dockerfile`.

## Required inputs

| Field | Required | Description |
|-------|----------|-------------|
| Repo URL | Yes | HTTPS or SSH URL (e.g. `https://github.com/org/repo.git`) |
| Branch | Yes | Branch to build from (e.g. `main`) |
| Dockerfile path | Yes | Relative path from repo root (e.g. `./Dockerfile`) |
| Git Username + Token | No | Required for private repositories |

## Step 1: Create project and app

1. On the dashboard, click **Create Project** and give it a name.
2. Open the project, click **Create App** → **Empty App**, give your app a name.

<img  src="/img/docs/managing-apps/creating-apps/create-app-dialog.png" alt="QuickStack Create App Dialog" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px'
}} />

## Step 2: Configure Git source

1. Open the app and go to **App Settings** → **General** tab.
2. Set **Source type** to **Git Repository**.
3. Fill in: Repo URL, Branch, Dockerfile path.
4. For private repos: add Git username and Personal Access Token.
5. Click **Save**.

<img  src="/img/docs/managing-apps/creating-apps/enter-git-credentials.png" alt="QuickStack Git Credentials" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

## Step 3: Deploy

Click the **Deploy** button at the top of the page. This triggers a fresh build from your Git branch and deploys the resulting container.

:::info Deploy applies changes
Any configuration change — Git source, env vars, storage, domains — only takes effect after clicking **Deploy**.
:::

## Step 4: Verify

1. Open the **Overview** tab — status turns green when the app is running.
2. Click **Show Logs** on the current deployment to inspect build and startup output in real time.

<img  src="/img/docs/managing-apps/creating-apps/deployment-overview.png" alt="QuickStack Deployment Overview" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px'
}} />

<img  src="/img/docs/managing-apps/creating-apps/deployment-logs.png" alt="QuickStack Deployment Logs" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Build fails | Check deployment logs for Dockerfile errors |
| Dockerfile not found | Verify the path is relative to repo root (e.g. `./Dockerfile`) |
| App not reachable after deploy | Add a domain in the **Domains** tab with the correct internal container port |

## Next steps

- [Add a domain](./03-domains.md)
- [Set environment variables](./06-env-vars.md)
- [Add a volume](./05-storage.md)
- [Enable webhooks](./09-webhooks.md)