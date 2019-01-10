"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrides = [
    {
        files: [
            'dist/**/*.js',
            'src/**/*.js',
            'test/**/*.js'
        ],
        rules: {
            'new-cap': 'off',
            'no-invalid-this': 'off',
            'no-unused-expressions': 'off',
            'object-curly-spacing': 'off',
            quotes: 'off',
            semi: 'off',
            'valid-typeof': 'off',
            camelcase: 'off',
        }
    }
];
