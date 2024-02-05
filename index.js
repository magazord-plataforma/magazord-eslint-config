module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:tailwindcss/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "simple-import-sort"
    ],
    "rules": {
        "simple-import-sort/imports": "error",
        "indent": [
            "error",
            3
        ],
        "quotes": [
            "error",
            "single",
            { "allowTemplateLiterals": true }
        ],
        "semi": [
            "error",
            "never"
        ],
        "@typescript-eslint/no-explicit-any": ["off"],
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-key": "off",
        "no-tabs": "error",
        "jsx-quotes": ["error", "prefer-double"],
        "tailwindcss/no-custom-classname": "off"
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js'],
            parser: '@typescript-eslint/parser',
        },
    ],
    "ignorePatterns": [
        "node_modules"
    ]
}