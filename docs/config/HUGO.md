# Hugo configuration (config/)

This project uses Hugo’s **configuration directory** layout. Hugo loads configuration from:

- `config/_default/` (base config for all environments)
- `config/<environment>/` (environment-specific overrides, if present)

In this repository:

- `config/_default/` contains the active configuration.
- `config/next/config.yaml` is currently empty.
- `config/production/config.yaml` is currently empty.

> Note: Hugo merges configuration files by environment and filename. Values in an environment folder override `_default`.

## Files in `config/_default/`

### `config.yaml`

Key settings used by the site:

- **Site identity & behavior**
  - `baseURL`: current canonical base URL: `https://corporio.onrender.com/`
  - `languageCode`: `en-us`
  - `title`: `Helmani`
  - `paginate`: `6`
  - `rssLimit`: `10`
  - `enableRobotsTXT`: `true`
  - `disableAliases`: `true`

- **Custom outputs for Netlify-compatible files**
  - `outputs.home` includes `REDIRECTS` and `HEADERS` in addition to `HTML` and `RSS`
  - `mediaTypes.text/netlify` + `outputFormats.REDIRECTS/HEADERS` define how Hugo emits `_redirects` and `_headers`

  These outputs are wired to the templates in `layouts/` (see `layouts/index.redirects` and `layouts/index.headers`).

- **Caching**
  - `caches.getjson.maxAge: 10s` sets a short cache for `getJSON` usage.

- **Sitemap**
  - `sitemap.changefreq: weekly`
  - `sitemap.priority: 0.5`

- **Permalinks**
  - `permalinks.blog: "blog/:title/"`

- **Minification**
  - `minify.tdewolff.html.keepWhitespace: false` (HTML is minified on build)

- **Related content**
  - `related.threshold: 80` and indices for `categories` and `date`

- **Build stats**
  - `build.writeStats: true` makes Hugo write `hugo_stats.json`.
  - This file is commonly used for CSS tree-shaking (e.g., PurgeCSS). In this repo, PurgeCSS is currently disabled in PostCSS.

- **TinaCMS marker**
  - `_template: config_template` is used by TinaCMS to map this YAML file to a schema (see `tina/config.js`).

### `markup.yaml`

Markdown rendering is configured for **Goldmark**:

- `goldmark.renderer.unsafe: true` allows raw HTML in Markdown content.
- `goldmark.parser.attribute.block/title: true` enables attribute syntax.
- `highlight.style: dracula` sets the syntax theme.
- `highlight.codeFences: false` means fenced code blocks aren’t automatically highlighted via Hugo’s highlighter.
- `tableOfContents.startLevel: 2`, `endLevel: 3` controls ToC depth.

### `menus.yaml`

Defines two Hugo menus:

- `main`: header navigation, mostly anchor links (e.g. `#about`, `#product`).
- `sitemap`: footer/utility navigation linking to top-level pages (e.g. `contact`, `product`, `blog`).

Each menu item uses:

- `name`: display label
- `url`: link target
- `weight`: ordering (lower is earlier)

### `params.yaml`

Theme-level parameters (not Hugo core settings). Used throughout layouts/partials.

Notable groups:

- SEO/social: `description`, `images`, `ogLocale`, Twitter + schema metadata
- Branding: `titleHome`, `titleSeparator`, `titleAddition`, `logo`, `footerLogo`
- Images: responsive widths, conversion (`imageConvertTo: webp`), default classes
- UI features: `alert`, `alertText`, `alertDismissable`
- Contact: `address.*`, `map.*`, `social[]`
- Integrations: `googleAnalytics` (placeholder), `fabformURL`

Also includes:

- `_template: parameters_template` used by TinaCMS.

### `module.yaml`

Defines Hugo module mounts:

- Mounts local `layouts` → Hugo `layouts`
- Mounts `node_modules/@hyas/images/layouts` → Hugo `layouts`

This enables layouts/shortcodes/partials provided by `@hyas/images`.
