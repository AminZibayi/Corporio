# Config toolchain (Babel + PostCSS)

The `config/` folder also contains configuration for the asset processing toolchain used by Hugo’s build.

## Babel (`config/babel.config.js`)

- Uses `@babel/preset-env`.
- Targets browsers:
  - `>= 1%`
  - `not ie 11`
  - `not op_mini all`

This keeps generated JavaScript compatible with a broad range of browsers.

## PostCSS (`config/postcss.config.js`)

Active plugins:

- `autoprefixer()`

Disabled (commented out):

- `@fullhuman/postcss-purgecss`

PurgeCSS is present but intentionally disabled because it currently removes needed styles (note in file mentions jQuery-injected DOM as a likely cause). If you re-enable PurgeCSS, it is set up to:

- Use `./hugo_stats.json` as the content source.
- Apply a safelist including table elements, headings, alert classes, and entries derived from `purgecss-whitelister`.

## `hugo_stats.json`

Hugo is configured with `build.writeStats: true` (see `config/_default/config.yaml`), so running the Hugo build writes `hugo_stats.json` at the repo root.

That stats file is commonly used to drive CSS purging safely (because it reflects which classes Hugo rendered). In this repo it is currently only a potential input, since PurgeCSS is disabled.
