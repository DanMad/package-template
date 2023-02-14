const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
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
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, 'LICENSE'),
        path.resolve(__dirname, 'package.json'),
        path.resolve(__dirname, 'README.md'),
      ],
    }),
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    preferRelative: true,
  },
};
