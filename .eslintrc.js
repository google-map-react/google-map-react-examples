module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "src/stories/**",
        ]
      }
    ]
  },
  "env": {
    "es6": true,
    "jest": true,
    "browser": true,
  }
};
