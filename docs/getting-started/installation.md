---
sidebar_position: 1
title: "Installation"
---

# QuickStack Installation

Welcome! This guide will walk you through installing QuickStack on your Linux server. QuickStack simplifies the process of deploying and managing applications on your own server infrastructure.

## Prerequisites

Before you begin, ensure you have the following:

*   **Linux Server:** You'll need a Linux Server running a supported Linux distribution. Ubuntu is recommended. You'll need access via `ssh` and `sudo` access.
    *   Your server needs at least **2 CPU** cores and **4 GB of RAM**.
*  **Server Provider**: You can use any server provider like [Hetzner](https://hetzner.com), [DigitalOcean](https://digitalocean.com), [Vultr](https://vultr.com), [Linode](https://linode.com), any other provider or your own server, running on-premises.

## Step-by-Step Guide

Follow these steps to install QuickStack:

1.  **Connect to your Server:**
    Connect to the terminal of your server.

2. **Run the Installation Script:**
    Copy and paste the following command into your terminal and press `Enter`. This command downloads and executes the QuickStack installation script:
    ```bash
     curl -sfL https://get.quickstack.dev/setup.sh | sh -
    ```

3. **Wait for the Installation:**
    The installation script will now automatically install QuickStack and all necessary components on your Server. Please be patient as this process may take a few minutes. You'll see text scrolling in your terminal - this is normal.

4. **Access the QuickStack Web UI:**
   After the installation completes, open your web browser and navigate to the following URL. You must replace `your_server_ip` with the actual IP address of your Server.
    ```
    http://your_server_ip:30000
    ```
:::warning Warning
Make sure your firewall settings allow inbound traffic on port 30000, 80 and 443.
:::

5.  **Create a User Account**
   You will be prompted to create a new user account when accessing the web UI for the first time. Complete the registration form by providing an email, a password and an optional quickstack domain.

:::info Hint
If you already have a domain assigned to your QuickStacks Server IP, you can enter it in this field. This allows you to access the QuickStack UI through your domain. Leave it blank if you just want to use your IP address or want to configure it later.
:::

6.  **Start using QuickStack**
    Log in with your newly created credentials and start using QuickStack!

## Troubleshooting

If you encounter any issues during the installation process, here are some common problems and solutions.

*   **Connection Refused or Timeout:**
    *   Make sure you're connecting to the correct IP address or domain of your server.
    *   Ensure your Server is running and accessible.
*   **Script Download Failed**
    *   Verify that you have an active internet connection on your Server.
* **Web UI not showing up**
    * Your firewall settings must allow traffic on port 80, 443 and 30000.
    * Make sure the Quickstack installation was fully completed and that no errors were displayed on the Termina during the Installation Process.
