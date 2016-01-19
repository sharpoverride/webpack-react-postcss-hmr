var path = require('path');
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './src/main'
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
     module: {
        loaders: [{
            test: /\.tsx?$/,
            loaders: ['babel-loader','ts-loader'],
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
