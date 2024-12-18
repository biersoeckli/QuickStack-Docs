---
sidebar_position: 2
title: "Creating a User Account"
---

# Creating a QuickStack User Account

After installing QuickStack, the next step is to create your user account. This will allow you to log in and start managing your applications.

## Accessing the Registration Page

1.  **Open your web browser.**
    Use your favorite web browser such as Chrome, Firefox, Safari, etc.

2.  **Navigate to the QuickStack Web UI.**
    Type the IP address of your server into the address bar, followed by the port number `30000`.

    * **Example:** If your VPS IP address is `12.34.56.78`, type:

      ```
      http://12.34.56.78:30000
      ```

    *  **What is the Port?**  A port is like a specific address that software on your server uses to communicate with the outside world.

3.  **The Registration Page.**
   If you access QuickStack for the first time, the page will automatically redirect you to the registration page.

## Completing the Registration Form

The registration page contains the following fields:

1.  **Email Address:**
    Enter the email address you want to use for your QuickStack account. Make sure this is a valid address, as you might need it for password recovery and SSL certificate registration.

2.  **Password:**
    Choose a strong password for your account. Ensure it's secure by using a combination of letters, numbers, and symbols.

3.  **QuickStack Domain (Optional):**
     If you already have a domain assigned to your QuickStack Server, you can enter it in this field. This allows you to access the QuickStack UI through your domain. Leave it blank if you just want to use your IP address.

4. **Register**
   Click the "Register" Button to submit the registration.

## After Registration

1.  **You're logged in automatically:**
    After successfully registering, you'll be automatically logged in to your new QuickStack account.
2.  **Dashboard:**
    You'll be redirected to the QuickStack Dashboard, where you can start creating and deploying applications.

## Troubleshooting

If you encounter any issues while creating your account, consider the following troubleshooting steps:

* **Registration fails**
    * Doublecheck all the fields in the registration form are filled out correctly.
    * Ensure the password contains a combination of letters, numbers and symbols.
    * The QuickStack domain must be a valid hostname.
*   **Email Address Already Registered:**
    * If you see an error that your email address is already registered, you might have created an account previously. Use the password reset option if you've forgotten your password or try registering again with a different email address.
*   **Cannot Login:**
    * Ensure that you entered the email address and the password correctly.
    * Double check that your caps lock is off.

## Next Steps

Now that you've created your user account, you can move on to the next steps in QuickStack:

*   **[Setting up a Cluster](./cluster-setup.md):** If you plan to use QuickStack across multiple servers.
*   **[Deploying Your First App](./first-app.md):** To start building your first application.