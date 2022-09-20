/* بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِیمِ
الّلهُمَّ صَلِّ عَلی مُحَمَّد وَآلِ مُحَمَّد وَعَجِّل فَرَجَهُم */

module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  formatter: "@commitlint/format",
  rules: {
    "type-case": [2, "always", "pascal-case"],
    "type-enum": [2, "always", ["Docs", "Feat", "Fix", "Refactor", "Test", "Dev", "Clean", "Content"]],
  },
};
