module.exports = {
    env: {
        "browser": true,
        "jest": true,
        "es6": true
      },
    "plugins": [
        "react",
        "better-styled-components",

        "import",
    "react-hooks",
    "prettier",
    "jsx-a11y",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          "jsx": true
        }
      },
    "rules": {
        "better-styled-components/sort-declarations-alphabetically": 2,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
          // 'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    "no-console": "warn",
    // "no-unused-vars": "off",
    "no-eval": "error",
    "import/first": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx", ".tsx"]
    }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    // "prettier/prettier": ["error"]
    "prettier/prettier": ["error", { "singleQuote": true }],
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
        
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                 // default to latest and warns if missing
                                 // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            {"name": "Link", "linkAttribute": "to"}
        ]
    }
}