const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src'),
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    filename: 'index.js',
    library: {
      type: 'commonjs2',
    },
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        path.join(__dirname, 'LICENSE'),
        path.join(__dirname, 'package.json'),
        path.join(__dirname, 'README.md'),
      ],
    }),
  ],
  resolve: {
    // Explicitly aliases the tilde character to the package's
    // `node_modules` directory. This ensures SCSS `@import` statements
    // don't throw errors when referencing locally linked packages.
    alias: {
      '~': path.join(__dirname, 'node_modules'),
    },
    extensions: ['.js'],
  },
};
