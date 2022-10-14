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
      {
        exclude: /node_modules/,
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
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
    extensions: ['.js', '.scss', '.css'],
  },
};
