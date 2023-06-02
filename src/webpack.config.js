const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ... cấu hình Webpack của bạn ...
  plugins: [
    // ... các plugin khác của bạn ...
    new ESLintPlugin()
  ]
}
