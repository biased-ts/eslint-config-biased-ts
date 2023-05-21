/**
 * Enforces heavily (biased/stylized/opinionated) Typescript
 * This is not recommended to be used as a generic template
 * and is instead for those who.. "really like" Typescript.
 */

module.exports = {
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "./ProperDoc"
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "root": true,
    "parser": "@typescript-eslint/parser",
    "rules": {
        "brace-style": [
            2,
            "stroustrup",
            {
                "allowSingleLine": true
            }
        ],
        "quotes": [
            2,
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "eqeqeq": [
            2
        ],
        "no-var": [
            2
        ],
        "semi": [
            2
        ],
        "semi-style": [
            2,
            "last"
        ],
        "semi-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
        ],
        // Enforces 4 spaces instead of a tab.
        "indent": [
            2
        ],
        // Requires a default: case in a switch statement.
        "default-case": [
            2
        ],
        // simple
        "space-before-blocks": [
            2
        ],
        // Requires a space after a comment.
        "spaced-comment": [
            2,
            "always"
        ],
        // Stops the yoda statements!
        "yoda": [
            2
        ],
        // typescript dumb stuff
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": [
                    "variable",
                    "function"
                ],
                "format": [
                    // types
                    "camelCase",
                    // important vars
                    "PascalCase",
                    // normal vars and funcs
                    'snake_case',
                    // constants
                    'UPPER_CASE'
                ]
            }
        ],
        "@typescript-eslint/no-inferrable-types": [
            0
        ],
        "@typescript-eslint/no-non-null-assertion": [
            0
        ],
        "@typescript-eslint/no-explicit-any": [
            0
        ],

        // Here comes the onslaught of opinions
        "@typescript-eslint/adjacent-overload-signatures": [
            2
        ],
        "@typescript-eslint/consistent-indexed-object-style": [
            1
        ],
        "@typescript-eslint/consistent-type-imports": [
            1,
            {
                "prefer": "type-imports",
                "fixStyle": "separate-type-imports"
            }
        ],
        "@typescript-eslint/consistent-type-exports": [
            1
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
            1
        ],
        "@typescript-eslint/no-duplicate-enum-values": [
            1
        ],
        "@typescript-eslint/no-dynamic-delete": [
            1
        ],
        "@typescript-eslint/no-extra-non-null-assertion": [
            2
        ],
        "@typescript-eslint/no-floating-promises": [
            2
        ],
        "@typescript-eslint/no-for-in-array": [
            2
        ],
        "@typescript-eslint/no-invalid-void-type": [
            1
        ],
        "@typescript-eslint/no-misused-new": [
            2
        ],
        "@typescript-eslint/no-require-imports": [
            2
        ],
        "@typescript-eslint/no-unnecessary-type-constraint": [
            2
        ],
        "@typescript-eslint/no-unsafe-argument": [
            2
        ],
        "@typescript-eslint/prefer-as-const": [
            2
        ],
        "@typescript-eslint/prefer-readonly": [
            1
        ],
        "@typescript-eslint/prefer-ts-expect-error": [
            2
        ],
        "@typescript-eslint/promise-function-async": [
            1
        ],
        "no-loss-of-precision": [
            0
        ],
        "@typescript-eslint/no-loss-of-precision": [
            2
        ]
    }
}