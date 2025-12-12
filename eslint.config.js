/* بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِیمِ
الّلهُمَّ صَلِّ عَلی مُحَمَّد وَآلِ مُحَمَّد وَعَجِّل فَرَجَهُم */

import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es2021,
        ...globals.node,
        ...globals.jquery,
        google: "readonly",
      },
    },
  },
  {
    ignores: ["public/**", "node_modules/**", "resources/**", "assets/js/vendor/**"],
  },
];
