module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "import", "unused-imports"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          // ここに書いた順序で間に1行空行をあけつつ整頓される
          { pattern: "src/types/**", group: "internal", position: "before" },
          {
            pattern: "src/repositories/**",
            group: "internal",
            position: "before",
          },
          // TODO：ここはディレクトリ構成が決まり次第設定
          // styles
          // 最後尾にしたいのでgroupをindex扱いにする
          { pattern: "./**.module.css", group: "index", position: "before" },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
