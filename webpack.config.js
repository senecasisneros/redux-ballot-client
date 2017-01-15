var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

//The client-side library of the Webpack dev server and the Webpack hot module loader.
//These provide the Webpack infrastructure for hot module replacement.
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
      // loaders: ['babel-loader', 'eslint-loader']
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
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function () {
    return [autoprefixer];
  }
};
