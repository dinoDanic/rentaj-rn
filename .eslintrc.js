module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-expressions": "error",
    "react/display-name": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/no-redeclare": "error",
  },
  ignorePatterns: [""],
}
