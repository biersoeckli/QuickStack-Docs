---
sidebar_position: 1
title: "QuickStack Installation"
---

# QuickStack Installation

Welcome! This guide will walk you through installing the QuickStack platform on your Virtual Private Server (VPS). QuickStack simplifies the process of deploying and managing applications on your own infrastructure.

## Prerequisites

Before you begin, ensure you have the following:

*   **A Virtual Private Server (VPS):** You'll need a VPS running a supported Linux distribution. Ubuntu 22.04 is recommended. You'll need access via `ssh` and `sudo` access.
    *   **What is a VPS?** Think of a VPS as a computer that you rent in a data center. It gives you a place to run your applications and is under your control.
*   **SSH Access:** You need to be able to connect to your VPS using SSH. This allows you to interact with the server using text-based commands.
    *   **What is SSH?** SSH is like a secure tunnel that allows you to connect to your VPS from your computer using your terminal.
*   **A Basic Understanding of the Terminal** A basic understanding of using a terminal (or command line) is helpful for running the installation commands.
    *   **What is a Terminal?** A terminal is a program that allows you to interact with the operating system of your computer or VPS by typing in commands.

## Step-by-Step Guide

Follow these steps to install QuickStack:

1.  **Connect to your VPS:**
    Open your terminal (or an SSH client) and connect to your server using its IP address or domain name. Replace `your_username` and `your_server_ip` with your actual credentials.
    ```bash
    ssh your_username@your_server_ip
    ```

    *   **Example:** If your username is `azureadmin` and the server's IP is `12.34.56.78`, use:

        ```bash
        ssh azureadmin@12.34.56.78
        ```

2. **Download the Installation Script:**
    Once you're connected to your VPS, copy and paste the following command into your terminal and press `Enter`. This command downloads and executes the official QuickStack installation script:
    ```bash
     curl -sfL https://get.quickstack.dev/setup.sh | sh -
    ```

    * **What is a Script?**  A script is like a list of instructions for your computer. This special script will handle the entire installation process for QuickStack.

3. **Wait for the Installation:**
    The installation script will now automatically install QuickStack and all necessary components on your VPS. Please be patient as this process may take a few minutes. You'll see text scrolling in your terminal - this is normal.

4. **Access the QuickStack Web UI:**
   After the installation completes, open your web browser and navigate to the following URL. You must replace `your_server_ip` with the actual IP address of your VPS
    ```
    http://your_server_ip:30000
    ```

    *   **What is the Web UI?** The Web UI (User Interface) is where you will interact with QuickStack using your web browser to set up applications.

5.  **Create a User Account**
   You will be prompted to create a new user account when accessing the web UI for the first time. Complete the registration form by providing an email, a password and an optional quickstack domain.

6.  **Start using QuickStack**
    Log in with your newly created credentials and start using the app!

## Troubleshooting

If you encounter any issues during the installation process, here are some common problems and solutions. Also, consult the [Troubleshooting Guide](./troubleshooting.md) for further assistance.

*   **Connection Refused or Timeout:**
    *   Make sure you're connecting to the correct IP address or domain of your server.
    *   Ensure your VPS is running and accessible.
*   **Script Download Failed**
    *   Verify that you have an active internet connection on your VPS.
    *   The QuickStack installation URL may be temporarily unavailable, you can try again in a few minutes.
* **Web UI not showing up**
    * Make sure the Quickstack installation was fully completed and the deployment pods are ready
    * Your firewall settings on the VPS may be blocking the traffic.

## Key Components

During the installation, several important components are installed and configured. Here's a quick overview:

*   **k3s:** A lightweight version of Kubernetes, the technology that manages the containerized applications. It is like the director for your apps.
*  **Longhorn**: Provides persistent storage for your application data. This allows data to be safely stored and persist between deployment restarts.
*   **Cert-Manager:** A tool that automatically manages and issues SSL certificates to keep your connection secure.
*   **QuickStack:** The web UI and backend management tool which will deploy and manage all components of your application.

That's it! You now have a working instance of QuickStack running on your VPS.
Continue with the [Creating a User Account](./creating-account.md) or [Setting up a Cluster](./cluster-setup.md) guides to learn how to use QuickStack.