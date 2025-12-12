# Theming & Customization

The theme is built with **Bootstrap 4** and **SCSS**.

## Styles (SCSS)

Styles are located in `assets/scss/`.

- **Main Entry**: `assets/scss/app.scss`
- **Variables**: `assets/scss/_variables.scss`
  - Use this file to change global colors, fonts, and spacing.
- **Components**: `assets/scss/components/`
  - Contains specific styles for sections like the navbar, hero, blog, etc.

## Layouts (HTML)

Edit HTML templates in the `layouts/` directory to modify the structure.

- **Homepage**: `layouts/index.html`
- **Single Post**: `layouts/_default/single.html`
- **Partials**: `layouts/partials/`
  - Reusable components like `header.html`, `footer.html`, etc.

## Static Assets

- **Images**: Place static images in `static/images/`.
- **Fonts**: Place custom fonts in `static/fonts/` (if not using the asset pipeline).
