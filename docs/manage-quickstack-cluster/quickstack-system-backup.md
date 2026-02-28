---
sidebar_position: 2
title: "QuickStack Backup"
description: "Learn how to backup and restore your QuickStack configuration to protect your data."
keywords: ["QuickStack", "maintenance",  "backup", "configuration", "restore", "data protection"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="QuickStack System Backup"
  description="Complete guide to backing up and restoring QuickStack configuration, including system backups and manual database backup procedures."
  keywords="QuickStack, backup, restore, configuration, data protection, SQLite, database, S3, system backup"
  datePublished="2026-01-02"
  dateModified="2026-01-02"
  articleSection="Cluster Management"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Intermediate"
  dependencies="QuickStack Admin Access"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/manage-quickstack-cluster/quickstack-system-backup"
  about={["System Backup", "Data Protection", "Configuration Management", "Disaster Recovery"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# QuickStack System Backup

QuickStack stores its state in a SQLite database located at `storage/db/data.db` (in the QuickStack container). To backup your QuickStack configuration (projects, users, app definitions), you can use the built-in backup management features.

## System Backup Management

QuickStack provides integrated tools for creating and restoring complete system backups directly from the UI.

### Creating a System Backup

1.  **Navigate to Backup Settings:**
    Go to **QuickStack Settings** -> **Storage & Backups** 

2.  **Set Backup Location:**
    Choose the desired S3 target for storing system backups.

3.  **Run Backup:**
    Click **Run Backup Now** to create an immediate backup of the QuickStack database.
    If the S3 target is configured, QuickStack creates a backup automatically every 24 hours.

4.  **Download Backup:**
    *   Click **View & Restore Backup**.
    *   Choose a backup from the list.
    *   The backup file will be downloaded to your local machine.

### Restoring a System Backup

1.  **Access Backup Restore:**
    Navigate to **QuickStack Settings** -> **Storage & Backups**.

2.  **Upload Backup File:**
    *   Click **View & Restore Backups**.
    *   Select a previously downloaded backup.
    *   Confirm the restore operation.

3.  **System Restart:**
    *   QuickStack will replace the current database with the uploaded backup.
    *   The system will restart automatically to apply the restored configuration.
    *   All current data will be replaced with the backup data.

:::danger Critical Warning
Restoring a system backup **replaces all current configuration data** including:
- All projects and applications
- User accounts and permissions
- Environment variables and secrets
- App configurations and settings

**This action cannot be undone!** After restoring, you should clear your browser cache and log in again.
:::

:::tip Backup Best Practices
- **Regular Backups:** Download system backups before major changes
- **Test Restores:** Periodically verify backups can be restored successfully
- **Before Updates:** Always create a backup before updating QuickStack
:::

## Manual Backup (Advanced)
Since QuickStack runs as a Kubernetes pod, you can copy the database file to your local machine or a safe location on the server.

```bash
# Find the QuickStack pod name
kubectl get pods -n quickstack

# Copy the database file from the pod to the host
kubectl cp quickstack/<pod-name>:/app/storage/db/data.db ./quickstack-backup.db
```

*Note: Replace `<pod-name>` with the actual name of your QuickStack pod.*