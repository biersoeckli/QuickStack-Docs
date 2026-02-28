---
sidebar_position: 5
title: "Two-Factor Authentication (2FA)"
description: "Learn how to enable and configure two-factor authentication for your QuickStack account."
keywords: ["QuickStack", "2FA", "TOTP", "two-factor authentication", "security", "authenticator"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="TechArticle"
  title="Two-Factor Authentication in QuickStack"
  description="Guide on enabling and managing two-factor authentication (2FA) using TOTP for enhanced account security."
  keywords="QuickStack, 2FA, TOTP, two-factor authentication, security, authenticator, Google Authenticator"
  datePublished="2026-01-31"
  dateModified="2026-01-31"
  articleSection="Cluster Management"
  educationalUse="Documentation"
  inLanguage="en"
  proficiencyLevel="Beginner"
  dependencies="QuickStack User Account"
  operatingSystem="Linux"
  interactionCount="UserComments:0"
  mainEntityOfPage="https://quickstack.dev/docs/manage-quickstack-cluster/two-factor-authentication"
  about={["Account Security", "Two-Factor Authentication", "TOTP"]}
  isPartOf={{
    "@type": "WebSite",
    "name": "QuickStack Documentation",
    "url": "https://quickstack.dev/docs"
  }}
/>

# Two-Factor Authentication (2FA)

Two-factor authentication adds an extra layer of security to your QuickStack account. When enabled, you'll need both your password and a time-based code from an authenticator app to log in.

## Overview

QuickStack supports **TOTP (Time-based One-Time Password)** authentication, which works with popular authenticator apps like:

- Bitwarden
- Google Authenticator
- Microsoft Authenticator
- Authy
- 1Password
- Any other TOTP-compatible app

## Enabling 2FA

### Step 1: Access Profile Settings

1.  Click on **Settings** in the sidebar.
2.  Select **Profile** from the settings menu.

### Step 2: Enable 2FA

1.  Locate the **2FA Settings** card.
2.  Click the **Enable 2FA** button.

<!-- TODO: Screenshot placeholder - 2fa-settings-card.png -->
<img src="/img/docs/manage-quickstack-cluster/two-factor-authentication/2fa-step-1.png" alt="2FA Settings Card" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '600px',
    width: '90%'
}} />

### Step 3: Scan QR Code

1.  A dialog will appear with a QR code.
2.  Open your authenticator app on your phone.
3.  Scan the QR code with your authenticator app.
4.  The app will add a new entry for QuickStack.

<!-- TODO: Screenshot placeholder - 2fa-qr-code-dialog.png -->
<img src="/img/docs/manage-quickstack-cluster/two-factor-authentication/2fa-step-2.png" alt="2FA QR Code Dialog" style={{
    marginBottom: '20px',
    marginLeft: '30px',
    maxWidth: '350px',
    width: '90%'
}} />

### Step 4: Verify Setup

1.  Enter the 6-digit code from your authenticator app.
2.  Click **Verify** to confirm the setup.
3.  2FA is now enabled for your account.


## Managing 2FA

### Replacing 2FA Configuration

If you need to switch to a new device or authenticator app:

1.  Go to **Settings** → **Profile**.
2.  Click **Replace current 2FA Config**.
3.  Scan the new QR code with your new device/app.
4.  Verify with a code from the new setup.
5.  The old configuration is automatically invalidated.

### Disabling 2FA

To disable two-factor authentication:

1.  Go to **Settings** → **Profile**.
2.  Click **Deactivate 2FA**.
3.  Confirm the action.

:::danger Security Warning
Disabling 2FA reduces your account security. Only disable it temporarily if necessary, and re-enable it as soon as possible.
:::


:::tip Security Recommendations
- **Don't share your QR code or secret key** with anyone
- **Enable 2FA for all admin accounts** in production environments
:::

## Troubleshooting

### Lost Authenticator App / Lost access to 2FA

- Reset the admin password (see [Password Reset](../getting-started/password-reset.md)) to regain access and set up 2FA again with a new device.
