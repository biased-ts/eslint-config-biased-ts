/* Enforces proper JSDoc */

module.exports = {
    "plugins": [
        "jsdoc"
    ],
    "rules": {
        // Prevent multiple asterisks within a multi-line comment
        "jsdoc/no-multi-asterisks": [2],
        // Warns about bad blocks being used
        "jsdoc/no-bad-blocks": [1],
        // Requires asterisk prefixing on multi-line comments
        "jsdoc/require-asterisk-prefix": [2],
        // Warn if an invalid type is provided.
        "jsdoc/valid-types": [1],
        // Require an @param to have a type
        "jsdoc/require-property-type": [2],
        // Never have a hyphen before a parmater's description.
        "jsdoc/require-hyphen-before-param-description": [2],
        // Require JSDoc comments to add an @throw if it can throw an error.
        "jsdoc/require-throws": [2],
        // Enforces paramter's to have a proper name that corrosponds with the function
        "jsdoc/check-param-names": [2]
    }
}