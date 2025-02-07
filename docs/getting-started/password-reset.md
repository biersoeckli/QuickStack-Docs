---
sidebar_position: 4
title: "Password Reset"
description: "This guide will walk you through resetting the admin password for QuickStack."
keywords: ["QuickStack Password Reset", "QuickStack Password Change", "QuickStack Password Reset Guide"]
---

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
    marginLeft: 'opx',
    maxWidth: '500px'
}} />
