var path = require('path');
var config = {
  entry: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'app/main.js')
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
      query: {presets:['react','es2015']}
    }, {
        test: /\.css$/,
        loader: 'style!css'
    }]
  }
};

module.exports = config;