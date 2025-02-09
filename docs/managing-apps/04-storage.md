---
sidebar_position: 5
title: "Configuring Storage (Volumes)"
description: "Learn how to configure persistent storage for your QuickStack applications using volumes."
keywords: ["QuickStack", "volumes", "persistent storage", "storage", "mount path"]
---

# Configuring Storage (Volumes)

Persistent storage is critical for applications that need to retain data across deployments or restarts. QuickStack simplifies managing this storage using **volumes**. This guide will walk you through adding, configuring, and managing volumes for your QuickStack applications.

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

5.  **Save Volume Settings:** Click the "Save" button to save the volume configuration. You can configure multiple volumes for one single application.

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
*  **Backups:** Volumes are backed up by QuickStack. To configure a backup schedule, refer to the [Backups guide](./../backups.md).

## Troubleshooting

*   **Application Can't Write to Volume:**
    *   Verify the mount path in your container matches the mount path configured in QuickStack.
    *   Check the application's permissions within the container to ensure it has write access to the mount path.
*   **Incorrect Volume Size:**  You can increase the size of existing volumes.
*   **Access Mode Issues:** Make sure you have chosen the correct Access Mode for the desired replication of your app.
*   **Still having problems?**
    *   Create an issue on our [GitHub repository](https://github.com/biersoeckli/quickstack/issues)