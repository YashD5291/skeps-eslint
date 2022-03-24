module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "indent": ["error", 4],
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "no-console": "error",
        "no-self-compare": "error",
        "semi": "error",
        "no-multi-spaces": "error",
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "space-infix-ops": "error",
        "no-new-require": "error",
        "no-eq-null": "error",
        "space-before-function-paren": ["error", "always"],
        "no-multi-str": "error",
        "no-new-func": "error",
        "no-undefined": "error",
        "no-ex-assign": "off",
        "no-async-promise-executor": "off",
        "no-empty": ["error", { "allowEmptyCatch": true }]
    },
    // "overrides": [
    //     {
    //         "files": ["route/*.js", "config/*.js", "controller/*.js", "cron/*.js", "db-connections/*.js", "model/*", "schema/*"],
    //         "rules": {
    //             "indent": ["error", 4],
    //             "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    //             "no-console": "error",
    //             "no-self-compare": "error",
    //             "semi": "error",
    //             "no-multi-spaces": "error",
    //             "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    //             "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    //             "comma-spacing": ["error", { "before": false, "after": true }],
    //             "space-infix-ops": "error",
    //             "no-new-require": "error",
    //             "no-eq-null": "error",
    //             "space-before-function-paren": ["error", "always"],
    //             "no-multi-str": "error",
    //             "no-new-func": "error",
    //             "no-undefined": "error",
    //             "no-ex-assign": "off",
    //             "no-async-promise-executor": "off",
    //             "no-empty": ["error", { "allowEmptyCatch": true }]
    //         }
    //     }
    // ]
};
