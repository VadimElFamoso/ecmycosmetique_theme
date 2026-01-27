const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './js/theme.js',
  output: {
    filename: 'theme.js',
    path: path.resolve(__dirname, '../assets/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'js',
            target: 'es2015',
            format: 'iife',
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/theme.css',
    }),
    new BrowserSyncPlugin({
      proxy: 'localhost:8000',
      files: [
        '../assets/css/**/*.css',
        '../assets/js/**/*.js',
        '../templates/**/*.tpl',
        '../modules/**/*.tpl',

      ],
      notify: false,
      open: false,
      reloadDelay: 0,
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
};