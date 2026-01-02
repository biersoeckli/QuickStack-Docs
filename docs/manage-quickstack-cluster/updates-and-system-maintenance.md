---
sidebar_position: 1
title: "Updates & System Maintenance"
description: "Learn how to update, backup, and maintain your QuickStack installation."
keywords: ["QuickStack", "maintenance", "update", "backup", "password reset", "disk space", "cleanup"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Updates & System Maintenance for QuickStack"
  description="Comprehensive guide on maintaining your QuickStack instance, including updates, disk space cleanup, and troubleshooting."
  keywords="QuickStack, maintenance, update, disk space, cleanup, administration, troubleshooting, system management"
  datePublished="2026-01-02"
  dateModified="2026-01-02"
  articleSection="Cluster Management"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Intermediate"
  dependencies="QuickStack Admin Access"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/manage-quickstack-cluster/updates-and-system-maintenance"
  about={["System Updates", "Disk Cleanup", "Maintenance Tasks", "Troubleshooting"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Updates & System Maintenance

This guide covers essential administrative tasks for keeping your QuickStack instance healthy, up-to-date, and secure.

## Updating QuickStack

QuickStack is designed to be self-updating with automatic version checking. You can trigger updates directly from the dashboard without needing to SSH into your server.

### Automatic Version Checking

QuickStack periodically checks for new versions:

*   **Version Display:** The current installed version is always shown in the settings
*   **Update Notifications:** When a new version is available, you'll see an update indicator
*   **Release Information:** View changelog and release notes before updating

1.  **Navigate to Settings:**
    *   Click on **QuickStack Settings** in the main navigation bar.
    *   Open the **Updates** Tab.

2.  **Check Version:**
    *   You'll see information about:
        - Your currently installed version
        - Latest available version (if newer)
        - Release date and update information

3.  **Perform Update:**
    *   Click the **Update QuickStack** button when a new version is available.
    *   QuickStack will pull the latest Docker image and restart the service. This process typically takes a few minutes. The dashboard may become temporarily unavailable during the restart.

<!-- Placeholder for screenshot: Update QuickStack version dialog -->

:::info Update Behavior
Updates are pulled from the official QuickStack container registry. The system automatically:
- Checks for compatibility
- Downloads the new image
- Performs a rolling update
- Preserves all data and configuration

During the update of QuickStack itself, your running applications are not affected.
:::

### Canary Channel
For testing the latest features before they are released to the stable channel, you can enable the **Canary Channel**.
*   Toggle **Use Canary Channel for Updates** to switch to the experimental build stream.

:::warning Update Behavior
**Warning:** Canary builds may be unstable and are not recommended for production environments.
:::

## Disk Space & Cleanup

Over time, Docker images, build logs, and temporary files can consume disk space. QuickStack provides built-in tools to clean up these resources.

1.  **Navigate to Maintenance:**
    *   Go to **QuickStack Settings** -> **Maintenance**.

2.  **Free Up Disk Space:**
    *   **Purge Images:** Deletes unused build images from the internal container registry (if not stored on S3 target).
    *   **Cleanup Old Build Jobs:** Removes old containers of completed build jobs.
    *   **Cleanup Temp Files:** Deletes temporary files generated during operations.
    *   **Delete old App logs:** Clears historical application logs.
    *   **Delete Orphaned Containers:** Removes pods that are no longer associated with an active application (e.g., failed or succeeded containers).

:::info k3s behavior
**Info:** k3s & QuickStack itself manages the deletion of old data, images and containers. Use these cleanup options only if you are experiencing disk space issues. Copies of pulled external images (for example MariaDB Image) are deleted automatically by k3s when space is needed and cannot be cleaned up through this interface.
:::

## Troubleshooting

If you encounter issues with the QuickStack platform itself, you can access its internal logs or force a restart of core components.

*   **Open QuickStack Logs:** View the live logs of the QuickStack system container to diagnose errors.
*   **Force Update Registry:** Restarts the internal container registry. Use this if you are experiencing issues with building images/apps.

