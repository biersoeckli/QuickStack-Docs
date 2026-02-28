---
sidebar_position: 4
title: "Password Reset"
description: "This guide will walk you through resetting the admin password for QuickStack."
keywords: ["QuickStack Password Reset", "QuickStack Password Change", "QuickStack Password Reset Guide"]
---

import SchemaOrg from '@site/src/components/SEO/SchemaOrg';

<SchemaOrg 
  type="HowTo"
  title="QuickStack Password Reset Guide"
  description="This guide will walk you through resetting the admin password for QuickStack when you've forgotten it."
  keywords="QuickStack Password Reset, QuickStack Password Change, QuickStack Password Reset Guide, admin password recovery"
  datePublished="2025-06-17"
  dateModified="2025-06-17"
  inLanguage="en"
  step={[
    {
      "@type": "HowToStep",
      "name": "Run the reset command",
      "text": "Connect to your server terminal and run the password reset command",
      "url": "https://quickstack.dev/docs/getting-started/password-reset#password-reset"
    },
    {
      "@type": "HowToStep",
      "name": "Use the generated password",
      "text": "Use the generated password displayed in the terminal to log in to the QuickStack Web UI",
      "url": "https://quickstack.dev/docs/getting-started/password-reset#password-reset"
    }
  ]}
  tool={["Terminal", "SSH access"]}
  supply={["Server with QuickStack installed"]}
  proficiencyLevel="Beginner"
  operatingSystem="Linux"
/>

# Password Reset

If you forgot the admin password, you can reset it by running the following command on the terminal of your server:

```bash
curl -sfL https://get.quickstack.dev/reset-password.sh | sh -
```

:::warning Note
If you run QuickStack in a cluster on multiple servers, you need to run this command on the primary (master) node.
:::

After applying the command, a generated password will be displayed in the terminal. You can use this password to log in to the QuickStack Web UI.

<img  src="/img/docs/getting-started/password-reset/screenshot-password-change-script.png" alt="QuickStack admin password change" style={{
    marginBottom: '20px',
    marginLeft: '0',
    maxWidth: '500px'
}} />

:::tip Change Password After Login
After logging in with the generated password, navigate to **Settings** → **Profile** to change your password to something more memorable. You can also enable [Two-Factor Authentication](../manage-quickstack-cluster/two-factor-authentication.md) for additional security.
:::
