---
sidebar_position: 4
title: "Backups"
description: "Learn how to configure and manage backups for your applications in QuickStack to protect your data."
keywords: ["QuickStack", "backups", "data protection", "S3", "scheduled backups", "restore"]
---

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

## Managing Backups

You can view and manage your current backups from within QuickStack:

1.  **Navigate to Backups:**
    Navigate to the "Backups" page in the main QuickStack navigation.

2.  **View Backup Information:**
   You'll find a comprehensive overview of all your backups.

<img  src="/img/docs/backups/backups-overview.png" alt="QuickStack Add Backup Schedule" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />


## Troubleshooting

*   **Backup Schedules not working:** Check the cron expression and the server time.
*   **Backups Fail to Upload:** Ensure that the provided s3 target is working and QuickStack is correctly configured to access the bucket. You should also verify that there is enough space available in your object storage bucket. 
