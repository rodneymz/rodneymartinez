module.exports = {
    env: { browser: true, es2020: true, node: true },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    //   "plugin:storybook/recommended",
      "plugin:tailwindcss/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { 
      ecmaFeatures: { 
        "jsx": true 
      },
      ecmaVersion: "latest", 
      project: './tsconfig.json',
      sourceType: "module", 
    },
    plugins: ["@typescript-eslint", "react", "prettier", "react-refresh", "unused-imports"],
    rules: {
      "@typescript-eslint/no-unused-vars" : "off",
      'import/extensions': 'off',
      "no-trailing-spaces": "error",
      "no-console": "error",
      "react/jsx-uses-react": 1,
      'react/react-in-jsx-scope': 'off',
      "react-refresh/only-export-components": "warn",
      semi: "error",
      quotes: ["error", "double"],
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      }
    }
  };