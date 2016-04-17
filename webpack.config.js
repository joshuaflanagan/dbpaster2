var path    = require('path')
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: {
    app:           [
      'webpack-dev-server/client?http://localhost:4000',
      "webpack/hot/only-dev-server",
      './src/index.js',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel'],
      },
    ],
  },
  resolve: {
    alias: {
      'src': path.join(__dirname, 'src')
    },
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'host_app'),
    // https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#404-errors-for-hot-updatejson-files
    publicPath: '/',
    filename:    'app.js',
  },
  devServer: {
    publicPath: '/', // must match output.publicPath
    contentBase: 'host_app',
    historyApiFallback: true,
    port: 4000
  },
}
