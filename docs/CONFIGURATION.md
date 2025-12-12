# Configuration (config/)

This repository uses Hugo’s configuration directory layout, plus a small Node/PostCSS/Babel toolchain.

The previous version of this file was overly generic; the docs below are based on the actual files in `config/`.

## Docs index

- [Hugo configuration, menus, params, markup, and module mounts](./config/HUGO.md)
- [Asset toolchain configuration (Babel + PostCSS)](./config/TOOLCHAIN.md)

## Quick notes

- `config/_default/` contains the active configuration.
- `config/next/config.yaml` is empty (reserved for future overrides).
- `config/production/config.yaml` is empty (reserved for future overrides).

## Related files outside `config/`

- `hugo_stats.json` is written by Hugo because `build.writeStats: true` is enabled (used as a potential PurgeCSS input).
- TinaCMS uses the `_template` keys in YAML files to map schemas (see
  `tina/config.js` and `tina/templates.js`).
