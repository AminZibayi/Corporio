# Content Management

All content is stored in the `content/` directory.

## Directory Structure

- **Homepage**: `content/_index.md`
- **Blog Posts**: `content/blog/`
- **Products**: `content/product/`
- **Contact Page**: `content/contact/`

## Adding a New Blog Post

You can create a new post using the CLI command:

```bash
pnpm run create blog/my-new-post.md
```

This creates a file at `content/blog/my-new-post.md` with pre-filled frontmatter.

## Frontmatter

The top of each content file contains YAML frontmatter:

```yaml
---
title: "My New Post"
description: "A short description"
excerpt: "Text shown in list views"
date: 2023-10-27T10:00:00+00:00
draft: true
images: ["image.jpg"]
categories: ["Tech"]
---
```

**Important**: Set `draft: false` to publish the post.

## Data Files

Structured data (like lists of skills, testimonials, etc.) is stored in `data/`:

- `data/aboutSection.yml`
- `data/serviceSection.yml`
- `data/testimonialSection.yml`

Edit these YAML files to update those specific sections on the homepage.

## CMS (Tina)

This project is configured with **TinaCMS** for visual editing.

- **Development**: Run `pnpm run tina:dev` to start the Tina editor at `http://localhost:1313/admin`.
- **Production**: Refer to the project's [README](../README.md#tina-cms) for production setup.
