import CopyPlugin from 'copy-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import path from 'path';

const commonConfig = {
  entry: './src/js/app.jsx',
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
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, './src/static'), to: '.' }],
    }),
    new HtmlPlugin({
      inject: 'body',
      template: path.join(__dirname, './src/html/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const webpackConfig = (env) => {
  if (env.development) {
    return {
      ...commonConfig,
      devServer: {
        port: 3000,
        static: ['src/static'],
      },
      mode: 'development',
      output: {
        filename: 'js/app.js',
      },
    };
  }

  return {
    ...commonConfig,
    mode: 'production',
    output: {
      filename: 'js/app.js',
      publicPath: '.',
    },
  };
};

export { webpackConfig as default };
