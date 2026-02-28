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

QuickStack provides two ways to handle storage needs in your applications: **Volumes** for persistent data storage, and **File Mounts** for injecting configuration files directly into containers.

## Understanding Volumes

*   **What are Volumes?** A volume represents a persistent storage location that can be mounted into your application's containers. Data written to a volume persists even if the container is stopped, restarted, or redeployed.
*   **Mount Path:** The location inside your container where the volume will be accessible.  Your application will read and write data to this path.

## Adding a Volume to Your Application

1.  **Navigate to Application Settings:**
    Select the app you want to configure a volume for by clicking the application name.

2.  **Select the Storage Tab:**
    Select the "Storage" tab in the application settings.

<img  src="/img/docs/managing-apps/storage/storage-tab-empty.png" alt="QuickStack App Settings" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

3.  **Create a New Volume:**
    Click on "Add Volume." This action opens the “Edit Volume” dialog.

4.  **Configure the Volume:**
    *   **Mount Path Container:** Specify the path within your container where the volume should be mounted (e.g., `/data`, `/config`, `/app/uploads`).  This path is where your application will access the persistent storage.
    *   **Size in MB:** Enter the amount of storage you want to allocate to the volume in megabytes (MB).  Be generous, but be mindful of available disk space on your server.
    *   **Storage Class:** Select the Kubernetes storage class to use for this volume. The available storage classes depend on your cluster configuration. If you have multiple server-nodes, it is recommended to use `longhorn`.
    *   **Node Affinity (Optional):** Specify a node hostname to ensure the volume is created on a specific node. This is useful for:
        - Local storage configurations
        - Performance optimization (placing volume on the same node as the application)
        - Hardware-specific storage requirements
    *   **Access Mode:** Choose the access mode for the volume:
        *   **ReadWriteOnce (RWO):**  The volume can be mounted by a single node for reading and writing. This is suitable for most single-instance applications (for example, databases).
        *   **ReadWriteMany (RWX):** The volume can be mounted by multiple nodes for reading and writing. This is necessary for applications with multiple replicas/instances that need to share the same storage (for example, file servers or a wordpress backend).

<img  src="/img/docs/managing-apps/storage/create-volume.png" alt="QuickStack Create Volume Dialog" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

:::warning Important
After creation the Access Mode of the Volume cannot be changed.
:::

1.  **Save Volume Settings:** Click the "Save" button to save the volume configuration. You can configure multiple volumes for one single application.

<img  src="/img/docs/managing-apps/storage/storage-tab.png" alt="QuickStack App Settings" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

:::info Deploy changes
Make sure to hit the "Deploy" button after adding a new volume or changing data for an existing volume to apply the changes.
:::

## Managing Volumes

The "Storage" tab in the App settings area allows you to:

*   **View Existing Volumes:** See a list of all volumes attached to the application, including their name, mount path, size, and access mode.
*   **Edit Volumes:** Increase the size (in MB) of existing volumes (you cannot decrease the size of a volume) or changing the mount path.
*   **Delete Volumes:** Remove a volume from the application. This *will* delete all of the data stored on the volume, so use caution when deleting a volume.

## Important Considerations

*   **Data Location:**  Volumes are physically stored on the server's storage disk (managed via longhorn). The data will persist regardless of whether the container stops.
*   **Performance:** Storage performance will depend on the speed of your server's disk.
*   **Access Modes and Replicas:** If you are using multiple replicas for an application, ensure you use the "ReadWriteMany" (RWX) access mode for any shared volumes.
*   **Storage Classes:** Only use storage class "local-path" on a single-node cluster. For multi-node clusters, use longhorn.
*   **Node Affinity:** When using node affinity, ensure the specified node is available and has sufficient storage capacity. The volume will only be created on the designated node.
*  **Backups:** Volumes are backed up by QuickStack. To configure a backup schedule, refer to the [Backups guide](./../backups.md).

## Troubleshooting

*   **Application Can't Write to Volume:**
    *   Verify the mount path in your container matches the mount path configured in QuickStack.
    *   Check the application's permissions within the container to ensure it has write access to the mount path.
*   **Incorrect Volume Size:**  You can increase the size of existing volumes.
*   **Access Mode Issues:** Make sure you have chosen the correct Access Mode for the desired replication of your app.

---

## File Mounts

File mounts allow you to inject configuration files directly into your containers. Unlike volumes (which provide persistent storage), file mounts are designed for small, text-based configuration files that your application needs at a specific path.

:::info How it Works
QuickStack stores the file content and mounts it as a read-only file at the specified path inside your container.
:::

File mounts are useful when:
- Your application expects a configuration file at a specific path (e.g., `nginx.conf`, `config.json`)
- You need to inject certificates or key files
- You want to customize application behavior without rebuilding the image

### Adding a File Mount

1. **Go to Storage Tab:** Open your application and click on the **Storage** tab.
2. **Locate File Mount Section:** Scroll to the **File Mount** card.
3. **Add File Mount:** Click the **Add File Mount** button.
4. **Configure the File:**
   - **Mount Path:** The full path where the file should appear inside the container (e.g., `/etc/nginx/nginx.conf`)
   - **File Content:** The content of the file
5. **Save and Deploy:** Click **Save**, then redeploy the application for changes to take effect.

:::warning Redeployment Required
All changes to file mounts require a redeployment to take effect. Mounted files are read-only and cannot be modified by the running application.
:::

### File Mounts vs Volumes

| Feature | File Mount | Volume |
|---------|------------|--------|
| **Purpose** | Configuration files | Persistent data storage |
| **Size** | Small files (KB) | Large data (GB) |
| **Persistence** | Stored in QuickStack DB | Stored on disk |
| **Access** | Read-only | Read-write |
| **Use Case** | Config files, certificates | Databases, uploads, logs |
