var webpack = require('webpack');
var path = require('path');

var config = {
  entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://0.0.0.0:3222',
      path.resolve(__dirname, 'src/app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {presets:['react','es2015', 'stage-2']}
    }, {
        test: /\.css$/,
        loader: 'style!css'
    }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }]
  }
};

module.exports = config;