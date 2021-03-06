var webpack = require('webpack');
var path = require('path');
var HTMLWebPlugin = require('html-webpack-plugin')

var config = {
  entry: {
    bundle: path.resolve(__dirname, 'src/app/main.js'),
    vendor: ['material-ui']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    chunckFilename: '[id].chunk.js'
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
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['bundle'],
      filename: '[name].js',
      minChunks: Infinity
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   chunks: ['bundle'],
    //   filename: '[name].js',
    //   minChunks: Infinity
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new HTMLWebPlugin({
      template: path.resolve(__dirname, 'template.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'favicon.ico')
    })
  ]
};

module.exports = config;
