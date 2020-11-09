module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'no-dupe-keys': 2,
        'no-empty': 2,
        eqeqeq: 2,
        'no-fallthrough': 2,
        // 'no-console': 2,
        'no-unused-vars': 2,
        'comma-style': 2,
        'constructor-super': 2,
        'no-dupe-else-if': 2,
        'no-duplicate-case': 2,
        'no-inner-declarations': 2,
        'arrow-body-style': ['error', 'always'],
    },
}
