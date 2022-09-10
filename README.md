<p align="center">
  <a href="https://gethyas.com/">
    <img alt="Doks" src="https://hyas.netlify.app/hyas.svg" width="60">
  </a>
</p>

<h1 align="center">
  Hyas
</h1>

<h3 align="center">
  Modern Hugo Starter
</h3>

<p align="center">
  Hyas is a Hugo starter helping you build modern websites that are secure, fast, and SEO-ready — by default.
</p>

<p align="center">
  <a href="https://github.com/h-enk/hyas/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/h-enk/hyas?style=flat-square" alt="GitHub">
  </a>
  <a href="https://github.com/h-enk/hyas/releases">
    <img src="https://img.shields.io/github/v/release/h-enk/hyas?include_prereleases&style=flat-square"alt="GitHub release (latest SemVer including pre-releases)">
  </a>
  <a href="https://www.npmjs.com/package/@hyas/core">
    <img src="https://img.shields.io/npm/v/@hyas/core?style=flat-square" alt="npm (scoped)">
  </a>
  <a href="https://github.com/h-enk/hyas/actions?query=workflow%3A%22Hyas+CI%22">
    <img src="https://img.shields.io/github/workflow/status/h-enk/hyas/Hyas%20CI/master?style=flat-square" alt="GitHub Workflow Status (branch)">
  </a>
  <a href="https://app.netlify.com/sites/hyas/deploys">
    <img src="https://img.shields.io/netlify/895a161c-86be-48a2-8c57-a8c5d68cd1a4?style=flat-square" alt="Netlify">
  </a>
</p>

![Hyas — Modern Hugo Starter](https://raw.githubusercontent.com/h-enk/hyas/master/images/tn.png)

- [Demo](#demo)
- [Why Corporio?](#why-corporio)
- [Requirements](#requirements)
- [Get Started](#get-started)
  - [Standalone Website](#standalone-website)
    - [1. Create a new site](#1-create-a-new-site)
    - [2. Install dependencies](#2-install-dependencies)
    - [3. Start development server](#3-start-development-server)
  - [As a Theme](#as-a-theme)
    - [1. Create a new site](#1-create-a-new-site-1)
    - [2. Install dependencies](#2-install-dependencies-1)
    - [3. Configure website](#3-configure-website)
- [Other commands](#other-commands)
- [Documentation](#documentation)
- [Communities](#communities)

## Demo

- [hyas.netlify.app](https://hyas.netlify.app/)

## Why Corporio?

Six reasons why you should use Corporio:

1. **Security aware**. Get A+ scores on [Mozilla Observatory](https://observatory.mozilla.org/analyze/hyas.netlify.app) out of the box. Easily change the default Security Headers to suit your needs.
2. **Fast by default**. Get 100 scores on [Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=bc1047434376aa5b3e50cf637f8a5b40) by default. Corporio removes unused css, prefetches links, and lazy loads images.
3. **SEO-ready**. Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking.
4. **Development tools**. Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually.
5. **Bootstrap framework**. Build robust, flexible, and intuitive websites with Bootstrap. Or use any other front-end framework if you prefer.
6. **Netlify-ready**. Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers.

## Requirements

- [Git](https://git-scm.com/) — latest source release
- [Node.js](https://nodejs.org/) — latest LTS version

## Get Started

Start a new Corporio themed site in two ways either as a theme or as a standalone website
Please note that it is recommended to use PNPM however you may also use NPM or Yarn, but they are not guaranteed to work.

### Standalone Website

#### 1. Create a new site

```bash
git clone https://github.com/AminZibayi/Corporio.git my-corporio-site && cd my-corporio-site
```

#### 2. Install dependencies

```bash
npm install
# OR
pnpm install
```

#### 3. Start development server

```bash
npm run start
# OR
pnpm start
```

### As a Theme

#### 1. Create a new site

```bash
git submodule add https://github.com/AminZibayi/Corporio.git themes/corporio
```

#### 2. Install dependencies

```bash
cd /themes/corporio && pnpm install
```

#### 3. Configure website

Add `theme: "corporio"` to your website config file.

## Other commands

_TODO_

## Documentation

_TODO_

## Communities

_TODO_
