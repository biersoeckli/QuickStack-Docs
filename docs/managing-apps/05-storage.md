---
sidebar_position: 5
title: "Storage: Volumes & File Mounts"
description: "Learn how to configure persistent storage volumes and mount configuration files into your QuickStack applications."
keywords: ["QuickStack", "volumes", "persistent storage", "storage", "mount path", "file mount", "ConfigMap", "config files"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Storage: Volumes & File Mounts in QuickStack"
  description="A comprehensive guide to setting up persistent storage volumes and mounting configuration files into your QuickStack applications."
  keywords="QuickStack, volumes, persistent storage, storage, mount path, container storage, Longhorn, data persistence, file mount, ConfigMap, config files"
  datePublished="2025-06-17"
  dateModified="2025-06-17"
  articleSection="Managing Apps"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Intermediate"
  dependencies="Longhorn"
  operatingSystem="Linux"
  mainEntityOfPage="https://quickstack.dev/docs/managing-apps/04-storage"
  about={["Container Storage", "Kubernetes Volumes", "Data Persistence", "Storage Management"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Storage: Volumes & File Mounts

QuickStack supports two storage types: **Volumes** for persistent data, and **File Mounts** for injecting read-only configuration files.

## Choose: Volume vs File Mount

| | Volume | File Mount |
|---|--------|------------|
| **Use when** | Persistent app data (databases, uploads, logs) | Small config files, certificates, read-only config |
| **Size** | MBs to GBs | Small files (KB range) |
| **Access** | Read-write | Read-only |
| **Persistence** | Stored on disk | Stored in QuickStack DB |

---

## Volumes

### Configure a volume

1. Open your app and go to the **Storage** tab.
2. Click **Add Volume** to open the Edit Volume dialog.

<img  src="/img/docs/managing-apps/storage/storage-tab-empty.png" alt="QuickStack App Settings" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

3. Fill in the fields:
   - **Mount Path** — path inside the container where the volume is accessible (e.g. `/data`, `/app/uploads`)
   - **Size in MB** — storage to allocate. You can increase but not decrease after creation.
   - **Storage Class** — `local-path` for single-node clusters; `longhorn` for multi-node clusters.
   - **Access Mode** — see Gotchas below.
   - **Node Affinity** _(optional)_ — pin the volume to a specific node.
4. Click **Save**, then redeploy the app.

<img  src="/img/docs/managing-apps/storage/create-volume.png" alt="QuickStack Create Volume Dialog" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

:::info Deploy changes
Click **Deploy** after adding or changing a volume for the changes to take effect.
:::

### Gotchas

:::warning Access Mode is permanent
The Access Mode cannot be changed after the volume is created.
:::

**Access modes:**
- **ReadWriteOnce (RWO)** — mounted by a single node; suitable for single-instance apps (e.g. databases).
- **ReadWriteMany (RWX)** — mounted by multiple nodes; required when replicas > 1 and the app shares writes across instances.

:::caution Replication rule
If your app runs with more than one replica **and** instances write to a shared path, you must use **RWX**. RWO with multiple replicas will cause mount conflicts.
:::

**Storage class:**
- `local-path` — single-node only; fast, no replication.
- `longhorn` — multi-node; supports replication and failover. Required if the volume must survive node failure.

### Manage volumes

- **Resize** — you can only increase size, never decrease.
- **Change mount path** — allowed, but requires a redeploy.
- **Delete** — permanently destroys all data on the volume. There is no undo.

<img  src="/img/docs/managing-apps/storage/storage-tab.png" alt="QuickStack Storage Tab" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

### Troubleshooting

| Symptom | Fix |
|---------|-----|
| App can't write to volume | Verify mount path in QuickStack matches the path your app uses; check container file permissions |
| Volume not mounting | If node affinity is set, verify the target node is online and has free disk space |
| Wrong access mode | Delete and recreate with the correct mode (backup first — data will be lost) |

---

## File Mounts

File mounts inject a static file into your container at a specified path. The content is stored in the QuickStack database and mounted as **read-only**. The running application cannot modify it.

**Typical uses:** `nginx.conf`, `config.json`, TLS certificates, environment-specific config files.

### Configure a file mount

1. Open your app and go to the **Storage** tab.
2. Scroll to the **File Mount** card and click **Add File Mount**.
3. Fill in:
   - **Mount Path** — full path inside the container (e.g. `/etc/nginx/nginx.conf`)
   - **File Content** — the text content of the file
4. Click **Save**, then redeploy the app.

:::warning Redeploy required
File mount changes only take effect after redeployment. Mounted files are read-only.
:::

| Feature | File Mount | Volume |
|---------|------------|--------|
| **Purpose** | Configuration files | Persistent data storage |
| **Access** | Read-only | Read-write |
| **Use Case** | Config files, certificates | Databases, uploads, logs |

---

## Related

- [Backups — volume backup schedules](../backups.md)
- [Cluster node management](../manage-quickstack-cluster/cluster-node-management.md) (relevant when using node affinity)
