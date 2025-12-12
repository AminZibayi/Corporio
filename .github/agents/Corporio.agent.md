# AGENTS.md

Guidance for coding agents (and humans using agents) working in this repository.

This repo is a Hugo-based static site/theme with a Node.js toolchain (pnpm) for linting, formatting, and running Hugo locally/CI.

## Operating principles (consistency & integrity)

- Make the smallest correct change that satisfies the request.
- Keep diffs focused: don’t reformat unrelated files.
- Prefer deterministic commands and reproducible builds.
- If adding dependencies, prefer minimal additions and keep `pnpm-lock.yaml` in sync.
- Don’t add secrets to the repo (tokens, API keys, private URLs).
- Do not assume global tools. Use `pnpm run <script>` to use project-local tools
  (like `hugo`).
- If UI changes are made, run `pnpm test:e2e` to verify no regressions.
- If a request is ambiguous, ask a clarifying question before changing behavior.
- Never modify files in `public/` or `resources/` directly; they are generated.
- When adding content, use the `content/` directory.
- When modifying layout, use `layouts/`.

## Repository quick facts

- Runtime/tooling:
  - Node.js: `^22.0.0` (CI uses Node 22.x; Netlify pins `22.12.0`)
  - Package manager: pnpm (CI sets up pnpm v9)
  - Hugo: installed via `postinstall` to `node_modules/.bin/hugo` (currently `0.128.0` extended)
- Linting:
  - JS: ESLint (`assets/js`, `config`, `functions`)
  - Styles: Stylelint (`assets/scss/**/*`)
  - Markdown: `markdownlint-cli2` (`*.md`, `content/**/*.md`)
- E2E:
  - Playwright (`tests/`), default base URL `http://localhost:1313`

## Working in GitHub Codespaces (or any fresh dev environment)

No devcontainer is currently checked in, so a Codespace should be treated like a standard Node environment.

Recommended setup:

1. Ensure Node 22 is active.
2. Ensure pnpm v9 is available (example):
   - `corepack enable`
   - `corepack prepare pnpm@9 --activate`
3. Install dependencies:
   - `pnpm install`
4. Start the dev server (binds to all interfaces; suitable for Codespaces port forwarding):
   - `pnpm start`

Notes:

- If you run Playwright locally and browsers are missing:
  - `pnpm playwright:install`
- Avoid line-ending churn (Windows/macOS/Linux CI matrix). Prefer committing files with LF endings.

## Local commands you should use

- Install: `pnpm install`
- Lint (this is what `pnpm test` runs): `pnpm test`
  - JS only: `pnpm lint:scripts`
  - Styles only: `pnpm lint:styles`
  - Markdown only: `pnpm lint:markdown`
- Format: `pnpm format`
- Dev server: `pnpm start`
- Build: `pnpm build`
- E2E tests: `pnpm test:e2e`

Avoid running scripts that are destructive unless explicitly requested:

- `pnpm run init` (removes `.git` and reinitializes)
- `pnpm run clean:git` (deletes merged branches)
- `pnpm run clean:install` (removes lockfile + node_modules)

## CI expectations (GitHub Actions)

This repo’s CI is defined in `.github/workflows/corporio-ci.yml`:

- Runs on `ubuntu-latest`, `windows-latest`, `macos-latest`
- Uses Node `22.x` and pnpm `9`
- Executes:
  - `pnpm install --frozen-lockfile`
  - `pnpm test` (lint)
  - `pnpm build`

Agent workflow rule:

- Before you finish a change that could affect build output (layouts/content/assets/config), ensure at minimum:
  - `pnpm test`
  - `pnpm build`

Security scanning:

- CodeQL runs separately via `.github/workflows/codeql-analysis.yml`.

## Deploy pipelines (Netlify & Render)

This repo supports static deploys with sensible defaults.

Netlify (`netlify.toml`):

- Publish directory: `public`
- Functions directory: `functions`
- Production build command: `npm run build`
- Node version is pinned via Netlify environment (`22.12.0`)

Render (`render.yaml`):

- Static site build uses pnpm (`pnpm install; ...; pnpm build`)
- `buildFilter` restricts what triggers builds
- Includes strict security headers (CSP, HSTS, etc.)

Agent workflow rule:

- If you touch headers, redirects, or CSP, treat it as a security-sensitive change:
  - Keep changes explicit and minimal.
  - Verify pages still load (especially `/admin/*` where CSP differs).
  - Avoid broadening CSP/permissions unless necessary.

## Commit and PR conventions

- Commit messages are validated by commitlint (`commitlint.config.js`).
- Allowed commit types (PascalCase): `Docs`, `Feat`, `Fix`, `Refactor`, `Test`, `Dev`, `Clean`, `Content`.

When producing a PR description (or summarizing changes), include:

- What changed (1–3 bullets)
- How to verify (`pnpm test`, `pnpm build`, optional `pnpm test:e2e`)
- Any deploy impact (Netlify/Render)
