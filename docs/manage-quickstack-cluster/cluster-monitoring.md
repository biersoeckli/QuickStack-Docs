---
sidebar_position: 3
title: "Cluster Monitoring"
description: "Monitor your Kubernetes cluster resources, disk usage, and node health in QuickStack."
keywords: ["QuickStack", "monitoring", "cluster", "resources", "nodes", "disk usage", "CPU", "memory", "metrics"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Cluster Monitoring in QuickStack"
  description="Comprehensive guide to monitoring cluster resources, node health, and disk usage in QuickStack."
  keywords="QuickStack, monitoring, cluster, resources, nodes, disk usage, CPU, memory, metrics, kubernetes"
  datePublished="2026-01-02"
  dateModified="2026-01-02"
  articleSection="Cluster Management"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Intermediate"
  dependencies="QuickStack Admin Access"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/manage-quickstack-cluster/cluster-monitoring"
  about={["Cluster Monitoring", "Resource Management", "Node Health", "Disk Usage"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Cluster Monitoring

QuickStack provides comprehensive monitoring capabilities to help you track the health and resource usage of your cluster. With visual dashboards and metrics, you can ensure your cluster is running optimally and identify potential issues.

## Overview

The monitoring features in QuickStack include:

- **Node Resource Visualization:** View CPU, memory, and disk usage across all cluster nodes
- **Status Indicators:** Real-time status of all applications
- **Storage Metrics:** Track disk usage and storage capacity

## Accessing Monitoring

1.  **Select Cluster Monitoring:**
    Choose **Monitoring** from the settings menu.

## Node Resource Monitoring

Once in the Monitoring section, you will see an overview of your cluster's nodes and their resource usage.

<img  src="/img/docs/manage-quickstack-cluster/cluster-monitoring/cluster-monitoring-overview.png" alt="QuickStack Logo" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '700px'
}} />

#### Understanding the Metrics

- **Color Coding:**
  - 🟢 Green: < 80% used (healthy)
  - 🟡 Yellow: 80-90% used (monitor)
  - 🔴 Red: > 90% used (action needed) --> Add more ressources to existing servers or add a server node to your cluster

:::warning High Resource Usage
When CPU / RAM / Disk usage exceeds 80%, QuickStack displays a warning. Critical issues may occur above 90% usage, including:
- Failed deployments
- Backup failures
- Application crashes
- System instability
:::

:::info Disk
For the disk usage, three metrics are shown:
- **Used Disk Space:** Amount of disk space currently in use on the node
- **Free but unusable Disk Space:** Disk space that is free but cannot be used due to system reservations 
- **Available Disk Space:** Remaining disk space available for use by deployed applications

Used and Free but unusable disk space together represent the total "used" disk space on the node.
:::
