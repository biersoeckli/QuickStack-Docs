---
sidebar_position: 5
title: "System Maintenance"
description: "Learn how to update, backup, and maintain your QuickStack installation."
keywords: ["QuickStack", "maintenance", "update", "backup", "password reset", "disk space", "cleanup"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="System Maintenance for QuickStack"
  description="Comprehensive guide on maintaining your QuickStack instance, including updates, backups, password resets, and disk space management."
  keywords="QuickStack, maintenance, update, backup, password reset, disk space, cleanup, administration"
  datePublished="2025-12-06"
  dateModified="2025-12-06"
  articleSection="Administration"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Intermediate"
  dependencies="QuickStack Admin Access"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/administration/system-maintenance"
  about={["System Administration", "Software Updates", "Data Backup"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# System Maintenance

This guide covers essential administrative tasks for keeping your QuickStack instance healthy, up-to-date, and secure.

## Updating QuickStack

QuickStack is designed to be self-updating. You can trigger updates directly from the dashboard without needing to SSH into your server.

1.  **Navigate to Settings:**
    *   Click on the **Settings** icon in the main navigation bar.
    *   Select **Maintenance** from the menu.

2.  **Check Version:**
    *   The **QuickStack Version** card displays your currently installed version.

3.  **Perform Update:**
    *   Click the **Update QuickStack** button.
    *   Confirm the action in the dialog.
    *   QuickStack will pull the latest Docker image and restart the service. This process typically takes a few minutes. The dashboard may become temporarily unavailable during the restart.

### Canary Channel
For testing the latest features before they are released to the stable channel, you can enable the **Canary Channel**.
*   Toggle **Use Canary Channel for Updates** to switch to the experimental build stream.
*   **Warning:** Canary builds may be unstable and are not recommended for production environments.

## Disk Space & Cleanup

Over time, Docker images, build logs, and temporary files can consume significant disk space. QuickStack provides built-in tools to clean up these resources.

1.  **Navigate to Maintenance:**
    *   Go to **Settings** -> **Maintenance**.

2.  **Free Up Disk Space:**
    *   **Purge Images:** Deletes unused build images from the internal container registry.
    *   **Cleanup Old Build Jobs:** Removes history of completed build jobs.
    *   **Cleanup Temp Files:** Deletes temporary files generated during operations.
    *   **Delete old App logs:** Clears historical application logs.
    *   **Delete Orphaned Containers:** Removes pods that are no longer associated with an active application (e.g., failed or succeeded jobs).

## Troubleshooting

If you encounter issues with the QuickStack platform itself, you can access its internal logs or force a restart of core components.

*   **Open QuickStack Logs:** View the live logs of the QuickStack system container to diagnose errors.
*   **Force Update Registry:** Restarts the internal container registry. Use this if you are experiencing issues with pushing or pulling images.

## Backups

QuickStack stores its state in a SQLite database located at `storage/db/data.db`. To backup your QuickStack configuration (projects, users, app definitions), you should back up this file.

### Manual Backup
Since QuickStack runs as a Kubernetes pod, you can copy the database file to your local machine or a safe location on the server.

```bash
# Find the QuickStack pod name
kubectl get pods -n quickstack

# Copy the database file from the pod to the host
kubectl cp quickstack/<pod-name>:/app/storage/db/data.db ./quickstack-backup.db
```

*Note: Replace `<pod-name>` with the actual name of your QuickStack pod.*