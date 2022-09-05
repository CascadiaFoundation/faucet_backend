module.exports = {
    env: {
        node: true,
    },
    extends: ["plugin:prettier/recommended", "eslint:recommended"],
    plugins: ["prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        "no-unused-vars": "off",
        "no-console": "warn",
    },
};
