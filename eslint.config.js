import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'public'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            importPlugin.flatConfigs.recommended,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            // "import/order" rule example (requires eslint-plugin-import)
            'import/order': ['error', { alphabetize: { order: 'asc' } }],
            'react-refresh/only-export-components': [
                'off',
                { allowConstantExport: true },
            ],
        },
        settings: {
            'import/resolver': {
                typescript: {
                    // Optionally specify your tsconfig path if not at root:
                    project: './tsconfig.json',
                },
            },
        },
    },
);
