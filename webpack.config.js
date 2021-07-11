const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const commonConfig = {
  entry: './src/index',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.join(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    alias: {
      'react/jsx-runtime': require.resolve('./node_modules/react/jsx-runtime'),
      react: require.resolve('./node_modules/react'),
      'react-dom': require.resolve('./node_modules/react-dom'),
    },
    extensions: ['.js', '.jsx'],
  },
};

module.exports = (env) => {
  if (env.development) {
    return {
      ...commonConfig,
      devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        port: 3000,
      },
      mode: 'development',
      output: {
        filename: 'app.js',
      },
    };
  }

  return {
    ...commonConfig,
    mode: 'production',
    output: {
      filename: 'app.js',
      publicPath: 'https://danmad.github.io/repo-template/',
    },
  };
};
