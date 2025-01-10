---
sidebar_position: 0
title: "Welcome to QuickStack"
description: "QuickStack is a simple Web UI to manage your Linux server and deploy your applications."
keywords: ["QuickStack", "QuickStack Introduction", "QuickStack Overview", "QuickStack Features"]
---

# Welcome to QuickStack!

QuickStack is a simple Web UI to manage your Linux server and deploy your applications. 
Think of QuickStack as your personal cloud platform, built to run on your servers! It takes care of all of the backend complexity allowing you to focus on your applications.

<img  src="/img/quick-stack-logo-light.png" alt="QuickStack Logo" width="300" style={{
    display: 'block',
    margin: 'auto',
    marginBottom: '20px'
}} />

## What is QuickStack?

At its core, QuickStack is a tool that automates the process of:

*  **Building & Deploying Applications:** QuickStack helps you easily build and deploy your applications to one single server or a cluster of servers.
*  **Managing Applications:** QuickStack provides a centralized web interface to monitor, backup and manage the different aspects of your applications.

It's designed to empower developers and system administrators with an easy and efficient way to bring their applications to life.
QuickStack was created by two students at the Eastern Switzerland University of Applied Sciences (OST) as part of a semester project.

## Why Use QuickStack?

QuickStack offers a number of advantages:

*   **Open Source**: QuickStack is open-source and free to use.
*   **Ease of Use:** Deploy and manage your applications using a simple, intuitive web interface. No command-line wizardry required, QuickStack does it all for you!
*   **Scalability:** Add multiple Servers and manage all servers and apps from a single Web UI.
*   **Flexibility:** Supports deployments from Docker images and Git repositories, a powerful orchestration tool for containerized applications.
*   **Full Control:** Have complete control over your data and infrastructure.

## Who is QuickStack For?

QuickStack is ideal for:

*   **Developers:** Who want to quickly deploy and manage applications without having to worry about server administration.
*   **Small Teams and Startups:** Seeking a cost-effective and easy-to-use deployment solution.
*   **System administrators:** Who want to manage their infrastructure through a user friendly interface.
*   **Anyone** wanting an easy way to deploy applications on their own servers.

## Wich tools uses QuickStack under the hood?
* **[k3s](https://k3s.io/)**: Lightweight Kubernetes
* **[Traefik](https://traefik.io/)**: Reverse Proxy and Load Balancer
* **[Longhorn](https://longhorn.io/)**: Distributed Block Storage
* **[registry](https://hub.docker.com/_/registry)**: Docker Registry
* **[kaniko](https://github.com/GoogleContainerTools/kaniko)**: Build Container Images In Kubernetes

## Getting Started

Ready to jump in? Here's what we recommend you do:

1.  **[Installation](./getting-started/installation.md):** Start with installing QuickStack on your server, follow this guide for instructions.
2.  **[Setting up a Cluster](./getting-started/cluster-setup.md):** Set up a cluster if you want to deploy applications across multiple servers.

## Community and Support

We are always looking for feedback on how to improve QuickStack. Please create an issue on our [GitHub](https://github.com/biersoeckli/QuickStack) repository.

Let's get started!