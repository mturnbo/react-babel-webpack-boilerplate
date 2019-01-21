const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BASE_PATH = path.resolve(__dirname, '');
const MODULES_PATH = path.join(BASE_PATH, 'node_modules');
const BUILD_PATH = path.join(BASE_PATH, 'dist');
const APP_PATH = path.join(BASE_PATH, 'src');
const ASSETS_PATH = path.join(BASE_PATH, 'assets');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_PATH + '/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: ASSETS_PATH + '/images/favicon.ico'
});

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});

module.exports = {
  entry: APP_PATH + '/index.js',
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: APP_PATH,
        exclude: MODULES_PATH
      },
      {
        test: /\.(s*)css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [APP_PATH, ASSETS_PATH]
              }
            }
          ]
        })
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader?name=[path][name].[ext]',
        exclude: MODULES_PATH
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: MODULES_PATH
      }
    ]
  },
  resolve: {
    alias: {
      assets: ASSETS_PATH,
      components: path.join(APP_PATH, 'components'),
      data: path.join(APP_PATH, 'data')
    },
    extensions: ['.js', '.json', '.jsx']
  }
};
