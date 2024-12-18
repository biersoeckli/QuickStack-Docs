---
sidebar_position: 3
title: "Setting up a Cluster"
---

# Setting up a QuickStack Cluster

QuickStack allows you to scale your applications and improve availability by setting up a cluster across multiple Virtual Private Servers (VPS). This guide walks you through the process of connecting additional servers to your primary QuickStack installation.

## Understanding the Concept of a Cluster

* **What is a Cluster?**  A cluster is a group of computers (in this case, VPSs) that work together as a single system. By distributing your applications across multiple servers, you can handle more users, and you provide a more stable environment if one server has a problem.

## Prerequisites

*   **An Existing QuickStack Installation:** You must have already installed QuickStack on at least one server, as described in the [Installation guide](./installation.md). This is the **primary** or **master node**.
*  **Additional VPS:** You must have additional VPS ready which you want to add to the cluster.
*   **SSH Access to Each VPS:** You need to be able to connect to each VPS using SSH.
*   **Network Connectivity:** All your servers must be able to communicate with each other on the same network.

## Steps to Set up a Cluster

### 1. Retrieve the Join Command from the QuickStack Web UI

1.  **Log in to QuickStack:**
    Open your web browser and navigate to the QuickStack web interface on your primary (master) node's IP address:

    ```
    http://your_master_ip:30000
    ```
   Replace `your_master_ip` with the actual IP or domain of your master node.
2.  **Navigate to the Cluster Settings:**
    Click on "Settings" and then click on "Cluster".
3. **Get the Join Command:**
    You will see a card with the headline "Add Cluster Node". Inside the card you'll find a command that looks something like this:
   ```bash
    curl -sfL https://get.quickstack.dev/setup-worker.sh | K3S_URL=https://MASTER-IP:6443 JOIN_TOKEN=fer239rhnfear9f98u123nwed sh
   ```
   This command is generated for your specific QuickStack setup.
   * **Important:** Keep this command handy, you will need it in the next step. This command contains your server's IP address and a special "key" that allows additional servers to join your cluster.

### 2. Connect Additional Nodes to the Cluster

1.  **Connect to the additional VPS**
    Connect to one of the VPS that you want to add to the cluster, using your terminal and `ssh`:
    ```bash
    ssh your_username@your_worker_server_ip
    ```
    Replace `your_username` with the username on the worker server and `your_worker_server_ip` with the IP of the worker server.
2.  **Execute the Join Command:**
    Copy the command that you previously obtained from QuickStack and paste it into the terminal of the server you want to add and execute it.

     * **Example:**
     ```bash
     curl -sfL https://get.quickstack.dev/setup-worker.sh | K3S_URL=https://12.34.56.78:6443 JOIN_TOKEN=fer239rhnfear9f98u123nwed sh
     ```
      * **Replace `12.34.56.78` with your actual master node IP and `fer239rhnfear9f98u123nwed` with your actual join token.**
3.  **Repeat for Each Additional Node:**
     Repeat steps 1 and 2 for every additional server you want to join the cluster. Each server will be configured as a **worker node**, and the master node will orchestrate everything between them.

### 3. Verify Cluster Setup in QuickStack

1.  **Navigate to the Cluster Overview:**
    Go back to the QuickStack web UI, navigate to "Settings" and then "Cluster".

2.  **Check Node List:**
    You should see all servers you've added to the cluster.

    *   **Status:** The "Status" column for each server should show that the server is "Online" and part of the cluster.

## Troubleshooting

If you encounter any issues, here are some tips:

*   **Connection Problems:**
    *   Ensure that all servers can connect to the primary server over the network. You might need to configure firewall settings.
    * Verify that the join command is correct.
*   **Nodes Not Joining:**
    *  Check that the `JOIN_TOKEN` hasn't changed on the Master Node. If the token has changed you need to run the command `sudo cat /var/lib/rancher/k3s/server/node-token` on your master node to retrieve a new one.
    *   Ensure that your additional server has access to the internet.
    * Verify the required ports (like 6443) are open on all servers.
* **In QuickStack, the new Node is not showing up**
    * Ensure that you waited a few minutes after running the installation script.
    * Check that all Pods in the Kubernetes cluster are online by running `kubectl get pods -A`.

## Key Points About Cluster Nodes

*   **Master Node:** The primary server that manages the cluster. It's where QuickStack is initially installed.
*   **Worker Nodes:** Additional servers that join the cluster to expand resources. They help to handle more load and provide redundancy.

## Next Steps

*   **[Deploying Your First App](./first-app.md):** Now that you have a cluster, you can deploy your first application!
*   **[Managing Apps](./managing-apps/creating-apps.md):** Learn how to manage applications on your cluster.
