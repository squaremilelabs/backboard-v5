import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"
import prettier from "eslint-plugin-prettier/recommended"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypescript,
  prettier,
  {
    rules: {
      "import/order": "warn",
      "no-console": ["warn", { allow: ["error", "warn"] }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "prettier/prettier": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules"]),
])

export default eslintConfig
