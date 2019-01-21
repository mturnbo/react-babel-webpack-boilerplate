const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    sourceMapFilename: '[name].map'
  }
});
