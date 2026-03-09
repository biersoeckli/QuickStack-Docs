# QuickStack Docs

This repository contains the documentation website for [QuickStack](https://github.com/biersoeckli/QuickStack) — a self-hosted PaaS that deploys containerized apps onto a k3s cluster with a simple web UI.

The site is built with [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.dev/).

## Development

Install dependencies and start the local dev server:

```bash
bun i
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the site.

## Contributing to the Docs

All documentation content lives in the `content/docs/` directory as MDX files. This is the only place you need to touch for most contributions.

### Directory structure

```
content/docs/
├── index.mdx              # Docs home page
├── meta.json              # Top-level sidebar order
├── tutorials/             # Getting-started guides (installation, first app, …)
├── how-to/                # Task-oriented how-to articles
│   ├── admin/             # Cluster management, users, updates
│   ├── backups/
│   ├── databases/
│   ├── deployments/
│   ├── networking/
│   ├── observability/
│   └── storage/
└── reference/             # Glossary, ports, UI navigation map
```

### Adding or editing a page

1. Create or edit an `.mdx` file in the appropriate subdirectory under `content/docs/`.
2. Add frontmatter at the top of the file:

   ```mdx
   ---
   title: "My Page Title"
   description: "A short description shown in search results and meta tags."
   ---
   ```

3. If you create a **new file**, add its filename (without the `.mdx` extension) to the `meta.json` in the same directory so it appears in the sidebar in the right order:

   ```json
   {
     "pages": ["existing-page", "my-new-page"]
   }
   ```

4. Run `npm run dev` and verify the page renders correctly at `http://localhost:3000/docs/…`.

### Adding images

Place images under `public/img/docs/` in a subfolder that matches the topic. Reference them in MDX with a standard Markdown image tag:

```mdx
![Alt text](/img/docs/my-topic/screenshot.png)
```

### MDX features

The site uses Fumadocs MDX. You can use all standard Markdown syntax plus:

- Fumadocs UI components (Callout, Tabs, Steps, …) — see the [Fumadocs docs](https://fumadocs.dev/docs/ui/components) for the full list.
- Standard HTML inside MDX where needed.

## Project structure (for site contributors)

| Path | Description |
|------|-------------|
| `content/docs/` | All documentation content (MDX) |
| `app/(home)/` | Landing page |
| `app/docs/` | Documentation layout and dynamic page route |
| `app/api/search/route.ts` | Full-text search API handler |
| `lib/source.ts` | Fumadocs content source adapter |
| `lib/layout.shared.tsx` | Shared sidebar/layout options |
| `source.config.ts` | Fumadocs MDX configuration and frontmatter schema |
| `components/landing/` | Landing page sections |

## Building for production

```bash
bun run build
bun run start
```

A `Dockerfile` is included for containerised deployments. The current version is deployed to https://quickstack.dev when changes are merged into `main`.
