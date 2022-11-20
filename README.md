INTRODUCTION
------------

eslint-config-biased-ts is a couple of heavily biased Eslint configuration files, made to both enforce
[my](https://github.com/acelikesghosts) biased styling, and to help bootstrap my other projects.

INSTALLATION
------------
 
 * Install both ESLint and eslint-config-biased-ts using your local package manager.
   EX: `npm i eslint eslint-config-biased-ts`

 * From there, create or modify your `.eslintrc.` (or whatever naming convention you use) to either
   extend `ProperDoc` or `ProperTS`

 * From there, you are done! If it does not work, restart your Eslint and or Typescript server.

EXAMPLES
------------

Recommended:
```json
{
    "root": true,
    "extends": [ "biased-eslint/ProperTSDoc", "biased-eslint/ProperTS" ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "ignorePatterns": ["**/dist/*"]
}
```

Typescript:
```json
{
    "root": true,
    "extends": [ "biased-eslint/ProperTS" ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "ignorePatterns": ["**/dist/*"]
}
```

JSDoc:
```json
{
    "root": true,
    "extends": [ "biased-eslint/JSDoc" ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "ignorePatterns": ["**/dist/*"]
}
```

TSDoc:
```json
{
    "root": true,
    "extends": [ "biased-eslint/TSDoc" ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "ignorePatterns": ["**/dist/*"]
}
```