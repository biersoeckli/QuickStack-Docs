---
sidebar_position: 4
title: "Deploying Your First App"
---

# Deploying Your First App with QuickStack

This guide will walk you through the process of deploying your first application using QuickStack. You'll learn how to create an application, configure its settings, and deploy it to your QuickStack cluster.

## Understanding the Basics

*   **What is an App?** In QuickStack, an "App" represents a single application or service you want to run. It can be anything from a simple website to a complex database.
*  **Source Type:** Here you have the option to deploy a container image or use your source code hosted on git.

## Two Deployment Options

You can choose between two deployment options in QuickStack:

1.  **Container Image Deployment:** Deploy an application using a pre-built Docker image, this is ideal for quickly deploying an application which you do not need to build.
2.  **Git Repository Deployment:** Deploy an application using source code from a Git repository. QuickStack will handle the build and deployment processes. This option is great for deploying applications that you are developing.

Let's start by deploying a simple container image.

## Option 1: Deploying a Container Image

This method is suitable if you already have a Docker image you want to run. For this example, we will be using the official nginx image.

### Step 1: Navigate to the Projects Overview

1.  **Log in to QuickStack:**
    Open your web browser and log in to QuickStack:
    ```
    http://your_server_ip:30000
    ```
    Replace `your_server_ip` with the actual IP address of your server or your domain.
2.  **Navigate to the Projects Overview:**
    Click on "Projects" in the side navigation.

### Step 2: Create a New Project

1.  **Click "Create Project":**
    You'll find a button labeled "+ Create Project". Click it.
2.  **Enter Project Name:**
    Give your project a name, for example "my-first-project", and then click "Create Project".

### Step 3: Create a New App

1.  **Navigate to Project Detail Page:**
    You'll be automatically redirected to the detail page of the newly created project.
2.  **Click "Create App":**
    Inside the project page, click the "+ Create App" button.
3. **Enter App Details**
    *   **Name:** Give your app a descriptive name (e.g., `my-nginx-app`).
    *   **Source Type:** Choose **"Docker Container"**.
    *   **Container Image Source:** Type the Docker image name: `nginx:latest`.
4. **Click Save:** Save the changes, you should see the detail page of the newly created app.

### Step 4: Deploy the App

1. **Deploy:** Click the deploy button in the app detail page.
2.  **Wait for the Deployment:**
    QuickStack will now pull the Docker image, configure the settings and deploy your application. It may take a few moments.

### Step 5: Verify the Deployment

1.  **Deployment Status:**
    The deployment status will change to "Succeeded".
2.  **Access your application:**
   Go to the "Overview" tab, you will find the assigned domain there, use that domain to verify your deployed Nginx Image.

**Congratulations!** You have successfully deployed your first application using QuickStack.

## Option 2: Deploying from a Git Repository

This method is useful when you have your source code hosted in a Git repository.

### Step 1: Create Project (Skip if you already have one)

Follow Step 1 & 2 from **Option 1** to create your project.

### Step 2: Create a New App

1.  **Click "Create App":**
    Inside the project page, click the "+ Create App" button.
2.  **Enter App Details**
    *   **Name:** Give your app a descriptive name (e.g., `my-git-app`).
    *   **Source Type:** Choose **"Git"**.
    *   **Git Repo URL:** Provide the URL of your git repository that has your source code. You can also add credentials for private repos.
    *   **Path to Dockerfile:** Specify where the Dockerfile for your project is in your repository (e.g. `/Dockerfile`).
3.  **Click Save:** Save the changes, you should see the detail page of the newly created app.

### Step 3: Deploy the App

1. **Deploy:** Click the deploy button in the app detail page.
2.  **Wait for the Build and Deployment:**
    QuickStack will now pull your source code, build a Docker image, and then deploy it. The process may take a few minutes, depending on the size of your application.

### Step 4: Verify the Deployment

1.  **Deployment Status:**
    The deployment status will change to "Succeeded".
2.  **Access your application:**
   Go to the "Overview" tab, you will find the assigned domain there, use that domain to verify your deployed App.

## Troubleshooting

If you have trouble during app deployment:

*   **Image or Git URL is not Valid:**
    *   Double check that the Docker Image name or the Git Repository is correct.
*   **App is not reachable**
    *  Double check the app's logs for any error messages that might prevent the application to start up.

## Next Steps

Now that you have your application deployed, you can continue learning about QuickStack:

*   **[Managing Apps](./managing-apps/creating-apps.md):** Explore other settings and management options for your apps.
*   **[Monitoring and Logging Apps](./managing-apps/monitoring-apps.md):** Learn how to track the resource usage and logs of your deployed application.
*   **[Adding Volumes](./managing-apps/volumes.md):** Persist your application data using volumes.