module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'always',
                semi: false,
                endOfLine: 'auto',
                jsxSingleQuote: false,
                jsxBracketSameLine: false,
                bracketSpacing: true,
            },
        ],
        '@typescript-eslint/no-explicit-any': ['off'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-key': 'off',
        'no-tabs': 'error',
        // Remova a propriedade overrides do bloco rules
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // Configurações específicas para TypeScript aqui
                semi: ['error', 'never'],
                singleQuote: ['error', 'true'], // ou 'error', dependendo da sua preferência
                tabWidth: 4,
                jsxSingleQuote: false,
            },
        },
    ],
    ignorePatterns: ['node_modules'],
};
