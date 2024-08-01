import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  {plugins: {...pluginJs.configs.recommended,
    ...{
      "simple-import-sort": simpleImportSort,
    }
  }},
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];