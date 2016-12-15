var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {
    bundle: path.resolve(__dirname, 'app/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
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
    new webpack.optimize.CommonsChunkPlugin('bundle', 'bundle.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  ]
};

module.exports = config;
var fs = require('fs')
webpack(config, (err, stats) => {
  console.log('err: ', err)
  var t = new Date().getTime()
  fs.writeFileSync(`./stats_deploy_${t}.json`, JSON.stringify(stats.toJson()))
  console.log('DONEEEEEEEEEEEEEEEEEEEEEEEEEE')
})
