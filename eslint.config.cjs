const nextPlugin = require('@next/eslint-plugin-next')

module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "next/typescript",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "off"
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["**/components/ui/**/*"],
}