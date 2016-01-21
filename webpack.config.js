var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    devtool: 'eval',
    entry: {
        h: 'webpack-hot-middleware/client',
        main: './src/main',
        second: './src/second'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'chunk.[name].js',
        publicPath: '/js/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new CommonsChunkPlugin("commons.chunk.js")
    ],
     module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.jpg/,
            loader: 'file'
        }, {
            test: /\.css/,
            loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'postcss']
        }]
  },
  postcss: function () {
      return {
          defaults: [cssnext]
      }
  }
}
