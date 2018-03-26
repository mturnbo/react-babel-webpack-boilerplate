const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const ASSETS_DIR = path.resolve(__dirname, 'assets');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: 'assets/images/favicon.ico'
});

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: APP_DIR,
        exclude: /node_modules/
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
                includePaths: [APP_DIR, ASSETS_DIR]
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
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      assets: ASSETS_DIR
    },
    extensions: ['.js', '.json', '.jsx']
  }
};
