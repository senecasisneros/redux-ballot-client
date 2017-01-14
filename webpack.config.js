const webpack = require('webpack');

module.exports = {
  entry: [
//The client-side library of the Webpack dev server and the Webpack hot module loader.
//These provide the Webpack infrastructure for hot module replacement. 
    'webpack-dev-server/client?hhtp://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ]
};
