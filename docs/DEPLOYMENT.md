# Deployment

This project is configured for easy deployment on modern hosting platforms.

## Build Command

To build the site manually:

```bash
pnpm run build
```

The output will be in the `public/` directory.

## Hosting Configuration

### Netlify

Configuration is found in `netlify.toml`. It handles redirects, headers, and build settings automatically.

### Render

Configuration is found in `render.yaml`.

## Manual Deployment

You can deploy the contents of the `public/` folder to any static site host (GitHub Pages, Vercel, AWS S3, etc.).
