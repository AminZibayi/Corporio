<h1 align="center">
  Corporio
</h1>

<h3 align="center">
  Corporation Website Template
</h3>

<p align="center">
  Corporio is an enterprise level corporation website template leveraging latest technologies making it secure, fast, and SEO-ready — by default
</p>

<!-- <p align="center">
  <a href="https://github.com/AminZibayi/Corporio/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/AminZibayi/Corporio?style=flat-square" alt="GitHub">
  </a>
  <a href="https://github.com/AminZibayi/Corporio/releases">
    <img src="https://img.shields.io/github/v/release/AminZibayi/Corporio?include_prereleases&style=flat-square"alt="GitHub release (latest SemVer including pre-releases)">
  </a>
  <a href="https://www.npmjs.com/package/@hyas/core">
    <img src="https://img.shields.io/npm/v/@hyas/core?style=flat-square" alt="npm (scoped)">
  </a>
  <a href="https://github.com/AminZibayi/Corporio/actions?query=workflow%3A%22Hyas+CI%22">
    <img src="https://img.shields.io/github/workflow/status/AminZibayi/Corporio/Hyas%20CI/master?style=flat-square" alt="GitHub Workflow Status (branch)">
  </a>
  <a href="https://app.netlify.com/sites/hyas/deploys">
    <img src="https://img.shields.io/netlify/895a161c-86be-48a2-8c57-a8c5d68cd1a4?style=flat-square" alt="Netlify">
  </a>
</p> -->

![Corporio — Corporation Website Template](https://raw.githubusercontent.com/AminZibayi/Corporio/master/images/tn.png)

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
- [Contributing](#contributing)
- [Communities](#communities)
- [License](#license)

## Demo

- [corporio.onrender.com](https://corporio.onrender.com/)

## Why Corporio?

Eight reasons why you should use Corporio:

1. **Security aware**. Get A+ scores on [Mozilla Observatory](https://observatory.mozilla.org/analyze/corporio.onrender.com) out of the box. Easily change the default Security Headers to suit your needs.
2. **Fast by default**. Leveraging the fastest static site generator, delivering optimized and minified static assets on the fastest CDNs on Render and Netlify.
3. **SEO-ready**. Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking.
4. **Forestry Integrated**. Do you prefer a graphical user interface over a text editor? or do you want to deliver the website to your non-technical customer? If so, Corporio is already integrated with forestry, a feature-rich headless CMS.
5. **Development tools**. Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually.
6. **Responsive**. Build robust, flexible, and intuitive websites with that looks best on any device.
7. **Integrated Blog**. Beside the modern and well-designed company landing page, Corporio ships with a built-in and ready full-featured blog.
8. **Products Page**. Introduce your products and services perfectly and impress your customers with our stunning product pages.
9. **Deploy-ready**. Deploy to Netlify or Render with sensible defaults. Easily use Netlify Functions, Render Redirects, and Headers.

## Requirements

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

## Contributing

You can contribute to this project by using it to create your own website, sharing it with your friends, sharing your ideas or reporting a bug through opening an issue and informing us if you have crafted your website using Corporio.

Contribution to the source code and documentation are highly welcome, there are many comments in the source code containing the keyword `TODO:` which could be a good staring point for you, feel free to ask a question by opening an issue.

## Communities

_TODO_

## License

[The MIT License](https://github.com/AminZibayi/Corporio/blob/master/LICENSE)
