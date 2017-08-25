const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: 'assets/images/favicon.ico'
});

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader?name=[path][name].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      }
    ]
  }
};
