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
        "prettier/prettier": [
            "error", {
                "tabWidth": 4,
                "singleQuote": true,
                "trailingComma": 'all',
                "arrowParens": 'always',
                "semi": false,
                'endOfLine': 'auto',
                "jsxSingleQuote": false,
                "jsxBracketSameLine": false,
                "bracketSpacing": true,
                "overrides": [
                    {
                        "files": ["*.ts", "*.tsx"],
                        "options": {
                            "semi": false,
                            "singleQuote": true,
                            "tabWidth": 4,
                            "jsxSingleQuote": false
                        }
                    }
                ]
            }
        ],
        "@typescript-eslint/no-explicit-any": ["off"],
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-key": "off",
        "no-tabs": "error",
    },
    "ignorePatterns": [
        "node_modules"
    ]
}
