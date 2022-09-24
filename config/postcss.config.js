// In the Name of God, the Originator the Creative

const autoprefixer = require("autoprefixer");
// const purgecss = require("@fullhuman/postcss-purgecss");
// const whitelister = require("purgecss-whitelister");

module.exports = {
  plugins: [
    autoprefixer(),
    // TODO: Purgecss removes some necessary stylesheets, fix it and uncomment it (this is probably because of jquery injected DOM)
    // purgecss({
    //   content: ["./hugo_stats.json"],
    //   safelist: [
    //     "lazyloaded",
    //     "table",
    //     "thead",
    //     "tbody",
    //     "tr",
    //     "th",
    //     "td",
    //     "h3",
    //     "alert-link",
    //     ...whitelister([
    //       "./assets/scss/components/_alerts.scss",
    //       // './assets/scss/components/_buttons.scss',
    //       "/assets/scss/_slick.scss",
    //       "/assets/scss/_magnific_popup.scss",
    //     ]),
    //   ],
    // }),
  ],
};
