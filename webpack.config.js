const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: 'src',
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
  },
  plugins: [
    new CopyPlugin({
      patterns: ['LICENSE', 'package.json', 'README.md'],
    }),
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    preferRelative: true,
  },
};
