const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BASE_PATH = path.resolve(__dirname, '../');
const APP_PATH = path.join(BASE_PATH, 'src');
const ASSETS_PATH = path.join(BASE_PATH, 'assets');

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});

module.exports = {
  plugins: [
    extractSass
  ],
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [APP_PATH]
            }
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: {
    alias: {
      assets: ASSETS_PATH,
      components: path.join(APP_PATH, 'components'),
      containers: path.join(APP_PATH, 'containers')
    },
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  }
};
