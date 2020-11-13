module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'semi': [
            'error',
            'always',
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'quotes': [
            'error',
            'single'
        ]
    }
};