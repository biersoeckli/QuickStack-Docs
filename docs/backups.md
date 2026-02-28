---
sidebar_position: 4
title: "Manage Backups for Apps & DBs"
description: "Learn how to configure and manage backups for your applications in QuickStack to protect your data."
keywords: ["QuickStack", "backups", "data protection", "S3", "scheduled backups", "restore"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="HowTo"
  title="Configuring and Managing Backups in QuickStack"
  description="A comprehensive guide to setting up, scheduling, and managing automated backups for your QuickStack applications using S3-compatible storage."
  keywords="QuickStack, backups, data protection, S3, scheduled backups, restore, data recovery, cloud storage, cron schedule"
  datePublished="2025-06-17"
  dateModified="2025-06-17"
  inLanguage="en"
  step={[
    {
      "@type": "HowToStep",
      "name": "Configure S3 Target",
      "text": "Set up an S3-compatible storage target to store your backups",
      "url": "https://quickstack.dev/docs/backups#step-1-configuring-s3-target"
    },
    {
      "@type": "HowToStep",
      "name": "Configure Volume Backups",
      "text": "Set up scheduled backups for your application volumes",
      "url": "https://quickstack.dev/docs/backups#step-2-configuring-volume-backups"
    },
    {
      "@type": "HowToStep",
      "name": "Define Backup Schedule",
      "text": "Set up the cron schedule and retention policy for your backups",
      "url": "https://quickstack.dev/docs/backups#step-2-configuring-volume-backups"
    },
    {
      "@type": "HowToStep",
      "name": "Manage Backups",
      "text": "View and manage your existing backups",
      "url": "https://quickstack.dev/docs/backups#managing-backups"
    }
  ]}
  tool={["QuickStack", "S3-Compatible Storage"]}
  supply={["QuickStack application with persistent storage volumes", "S3-compatible bucket"]}
  proficiencyLevel="Intermediate"
  applicationCategory="DataStorage"
  operatingSystem="Linux"
/>

# Backups

Protecting your application data is crucial. QuickStack provides a simple way to create and manage backups of your application volumes. This guide will cover configuring scheduled backups, managing your backups on S3 storage, and restoring data when needed.

## Prerequisites

*   An App with persistent storage volumes configured.
*   An S3-Compatible Bucket: S3 Bucket (e.g. on Hetzner Object Storage, Amazon S3, DigitalOcean Spaces, MinIO, Backblaze B2)

## Step 1: Configuring S3 Target

Before setting up backups for your Apps, you need to configure a S3 Target.

1.  **Navigate to S3 Targets:**
    Click on "Settings" and then click on "S3 Targets".

2.  **Add S3 Target:**
    Click on "Add S3 Target" and the enter the requested informations.
    *   **Name:** A friendly name to identify the S3 Target (can be anything).
    *   **Bucket Name:** The name of your S3 bucket.
    *   **Endpoint:**  The endpoint of your S3 storage provider (e.g., `s3.amazonaws.com`, `s3.us-east-2.amazonaws.com`, or the custom endpoint from your provider).
    *   **Region:** The region where your bucket is located.
    *   **Access Key ID:** Your Access Key ID.
    *   **Secret Key:** Your Secret Access Key.

:::danger Important
Store your Access Key ID and Secret Key safely! Make sure to configure access permissions that allow QuickStack to read, write and delete to the specified bucket, but limit other access.
:::

## Step 2: Configuring Volume Backups

QuickStack supports automated backups for both application volumes and managed databases. The backup system uses dedicated backup jobs for databases that run in isolated containers, ensuring consistent and reliable backups.

### Application Volume Backups

1.  **Navigate to App Settings:**
    Select the app you want to configure a backup for by clicking the application name.

2.  **Select the Storage Tab:**
    Select the `Storage` tab in the application settings.

<img  src="/img/docs/backups/storage-tab.png" alt="QuickStack App Settings" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

3.  **Configure Backup Schedule:**
   Scroll to the "Backup Schedules" section and click the `Add Backup Schedule` Button.

<img  src="/img/docs/backups/backup-schedules-table.png" alt="QuickStack Add Backup Schedule" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

4. **Define Backup Schedule:**
   Enter the information to configure the backup schedule.
    *   **Cron Expression:**  Define when the backup should be created. For example, `0 0 * * *` creates a backup every day at midnight. Use [crontab.guru](https://crontab.guru/) to generate cron expressions.
    *   **Retention:**  Define the amount of backups you want to retain. If there are more backups, the oldest will be deleted.
    *   **Volume to backup:**  Select the volume you want to backup.
    *   **Backup Location:** Choose an S3 Target from the S3 Targets list. 

<img  src="/img/docs/backups/edit-baclup-dialog.png" alt="QuickStack Add Backup Schedule" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

5.  **Save Backup Schedule**
    To save the configuration press the `Save` button.

<img  src="/img/docs/backups/backup-schedule-with-entry.png" alt="QuickStack Add Backup Schedule" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

:::info Testing Backup Schedule
To test the backup schedule, you can manually trigger a backup by clicking the `play-icon` button in the backup schedule table.
:::

### Database Backups

QuickStack provides specialized backup jobs for managed databases (MariaDB, PostgreSQL, MongoDB) that create consistent database dumps.

1.  **Navigate to Database Settings:**
    Go to your project and select the database you want to backup.

2.  **Configure Database Backup:**
    Navigate to the **Storage** tab and click **Add Backup Schedule**.

3.  **Backup Configuration:**
    *   **Cron Expression:** Define the backup schedule (e.g., `0 2 * * *` for daily at 2 AM).
    *   **Retention:** Number of backups to keep before deleting old ones.
    *   **Backup Location:** Select your configured S3 target.

:::tip Database-Specific Features
- **MariaDB/PostgreSQL**: Uses native dump tools (`mariadb-dump`, `pg_dump`) for consistent backups
- **MongoDB**: Uses `mongodump` with archive format
- Backups are compressed using `tar.gz` 
:::

:::warning Database Backup Behavior
Database backup jobs create a separate backup container that connects to your database and creates a dump. The backup process:
1. Spawns a dedicated backup pod in the project namespace
2. Connects to the database using internal networking
3. Creates a compressed database dump
4. Uploads the dump to S3 storage
5. Cleans up the backup pod after completion
:::

## Managing Backups

You can view and manage your current backups from within QuickStack:

1.  **Navigate to Backups:**
    Navigate to the "Backups" page in the main QuickStack navigation.

2.  **View Backup Information:**
   You'll find a comprehensive overview of all your backups including:
   - Backup status and last run time
   - Size and storage location
   - Success/failure indicators
   - Manual trigger options

<img  src="/img/docs/backups/backups-overview.png" alt="QuickStack Add Backup Schedule" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

## System Backups

QuickStack also supports uploading and restoring complete QuickStack system configuration for disaster recovery. For more information, refer to the [System Backup Guide](./manage-quickstack-cluster/quickstack-system-backup.md).


## Troubleshooting

*   **Backup Schedules not working:** 
    *   Check the cron expression syntax at [crontab.guru](https://crontab.guru/).
    *   Verify server time is correct.
    *   Check if the S3 target is properly configured.
*   **Backups Fail to Upload:** 
    *   Ensure that the provided S3 target is working and QuickStack is correctly configured to access the bucket.
    *   Verify that there is enough space available in your object storage bucket.
    *   Check S3 credentials and permissions (QuickStack needs read, write, and delete permissions).
*   **Database Backup Fails:**
    *   Ensure the database is running and accessible.
    *   Check the backup pod logs in the Backups page for specific errors.
