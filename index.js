module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
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
        "jsx-quotes": ["error", "prefer-double"], // Adicione esta linha para usar aspas duplas em JSX
    },
    "ignorePatterns": [
        "node_modules"
    ]
}
