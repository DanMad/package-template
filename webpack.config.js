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
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    filename: 'index.js',
    library: {
      type: 'umd',
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
    extensions: ['.js'],
  },
};
