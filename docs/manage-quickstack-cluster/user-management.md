---
sidebar_position: 4
title: "User Management"
description: "Learn how to manage users and groups in QuickStack for access control and permissions."
keywords: ["QuickStack", "users", "groups", "permissions", "access control", "RBAC", "roles"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="User Management in QuickStack"
  description="Comprehensive guide to managing users, groups, and permissions in QuickStack for secure multi-user access control."
  keywords="QuickStack, users, groups, permissions, access control, RBAC, roles, team management, security"
  datePublished="2026-01-31"
  dateModified="2026-01-31"
  articleSection="Cluster Management"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Intermediate"
  dependencies="QuickStack Admin Access"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/manage-quickstack-cluster/user-management"
  about={["User Management", "Access Control", "Permissions", "Team Collaboration"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# User Management

QuickStack provides a comprehensive user management system that allows administrators to control who can access the platform and what actions they can perform. This guide covers creating users, managing groups, and configuring granular permissions.

## Overview

The user management system in QuickStack consists of:

- **Users:** Individual accounts that can log into QuickStack
- **Groups:** Collections of permissions that can be assigned to users
- **Permissions:** Granular access controls for projects and applications

## Accessing User Management

1.  **Navigate to Settings:**
    Click on **Settings** in the sidebar.

2.  **Select Users & Groups:**
    Click on **Users & Groups** to access the user management interface.

## Managing Users

### Creating a New User

1.  Click the **Create User** button.
2.  Enter the user's details:
    *   **Email:** The user's email address (used for login)
    *   **Password:** A secure password for the account
    *   **Group:** Select a group to assign permissions
3.  Click **Save** to create the user.

<img src="/img/docs/manage-quickstack-cluster/user-management/create-user.png" alt="Create User Dialog" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '400px',
    width: '90%'
}} />

### Editing a User

1.  Find the user in the users table.
2.  Click the **Edit** (pencil) icon.
3.  Modify the email or group assignment.
4.  Click **Save**.

### Deleting a User

1.  Find the user in the users table.
2.  Click the **Delete** (trash) icon.
3.  Confirm the deletion.

:::warning Admin Protection
You cannot delete your own admin account while logged in. This prevents accidental lockout.
:::

## Managing Groups

Groups define what users can do within QuickStack. Switch to the **Groups** tab to manage them.

### Default Admin Group

QuickStack includes a built-in **Admin** group with full access to all features. This group cannot be deleted or modified.

### Creating a New Group

1.  Click the **Create Group** button.
2.  Enter a **Group Name** (e.g., "Developers", "Viewers").
3.  Configure project permissions (see below).
4.  Click **Save**.

<img src="/img/docs/manage-quickstack-cluster/user-management/create-group-screenshot.png" alt="Create Group Dialog" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

:::danger Group Deletion Warning
When you delete a group, users assigned to that group will have **no permissions** until reassigned to a new group. They will not be able to access any QuickStack features.
:::

## Configuring Permissions

Groups can be configured with granular permissions per project and even per application.

### Project-Level Permissions

For each project, you can grant:

| Permission | Description |
|------------|-------------|
| **Read Apps** | View applications and their configurations |
| **Write Apps** | Modify application settings, deploy applications |
| **Create Apps** | Create new applications in the project |
| **Delete Apps** | Remove applications from the project |


### Per-App Permissions

For even finer control, enable **Set permissions per App** for a project. This allows you to:

- Grant read-only access to specific applications
- Allow write access to certain apps while restricting others
- Create specialized access patterns for different team roles

### Permission Inheritance

- **No project permission** = No access to any apps in that project
- **Project-level permission** = Same permission for all apps
- **Per-app permission** = Override project-level settings for specific apps
