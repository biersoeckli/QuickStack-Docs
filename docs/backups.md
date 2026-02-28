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

QuickStack backs up two types of data: **application volumes** (persistent storage) and **managed database dumps** (MariaDB, PostgreSQL, MongoDB). All backups are pushed to an S3-compatible bucket on your defined schedule.

:::info System backups
For QuickStack configuration backups (SQLite database), see [System Backup Guide](./manage-quickstack-cluster/quickstack-system-backup.md).
:::

---

## 1. Configure an S3 target

All backup destinations are S3-compatible buckets. Configure at least one before setting up any backup schedule.

1. Go to **Settings** → **S3 Targets**.
2. Click **Add S3 Target** and fill in:
   - **Name** — a label for this target (anything)
   - **Bucket Name** — your S3 bucket name
   - **Endpoint** — S3 endpoint URL (e.g. `s3.amazonaws.com`)
   - **Region** — bucket region
   - **Access Key ID** and **Secret Key** — credentials with read, write, and delete permissions on the bucket

:::danger Credentials
Store Access Key and Secret Key securely. Rotate credentials regularly and restrict bucket permissions to only what QuickStack needs: read, write, delete.
:::

---

## 2. Volume backup schedules

1. Open the app and go to the **Storage** tab.
2. Scroll to **Backup Schedules** and click **Add Backup Schedule**.
3. Configure:
   - **Cron Expression** — when to run (e.g. `0 0 * * *` = daily at midnight; use [crontab.guru](https://crontab.guru/) for reference)
   - **Retention** — number of backups to keep; oldest are deleted when exceeded
   - **Volume** — which volume to back up
   - **Backup Location** — choose an S3 target
4. Click **Save**.

<img  src="/img/docs/backups/backup-schedules-table.png" alt="QuickStack Backup Schedules" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

:::info Manual trigger
To test a schedule immediately, click the **play** icon next to the schedule in the table.
:::

---

## 3. Database backup schedules

QuickStack runs isolated backup containers that connect to your managed database and produce a compressed dump.

1. Open the database from your project.
2. Go to the **Storage** tab and click **Add Backup Schedule**.
3. Configure:
   - **Cron Expression** — e.g. `0 2 * * *` (daily at 2 AM)
   - **Retention** — number of dumps to keep
   - **Backup Location** — choose an S3 target
4. Click **Save**.

**Dump formats by engine:**
- MariaDB → `mariadb-dump`, compressed as `tar.gz`
- PostgreSQL → `pg_dump`, compressed as `tar.gz`
- MongoDB → `mongodump` archive format

**Restore a database dump:** Download the backup archive from the **Backups** page, then restore it using the native tools for your database engine (`mysql`, `psql`, `mongorestore`) against a running instance.

---

## 4. Monitoring & logs

Navigate to **Backups** in the main menu to see all configured schedules with:
- Last run time and status (success/failure)
- Backup size and storage location
- Manual trigger button

<img  src="/img/docs/backups/backups-overview.png" alt="QuickStack Backups Overview" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

For database backups that fail, click into the backup entry to view the backup pod logs.

---

## 5. Troubleshooting

| Problem | Fix |
|---------|-----|
| Backup schedule not running | Verify cron expression syntax; check that server time is correct |
| Upload fails | Confirm S3 credentials are valid and the bucket exists; verify QuickStack has read/write/delete permissions |
| Database backup fails | Ensure the database is running; check backup pod logs on the Backups page |

---

## Related

- [Storage: Volumes & File Mounts](./managing-apps/05-storage.md)
- [System Backup Guide](./manage-quickstack-cluster/quickstack-system-backup.md)
