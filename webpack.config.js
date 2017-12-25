var path = require('path');
var webpack = require('webpack');

var env = process.env.NODE_ENV;

var config = {
  entry:path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js' 
  },
  devtool: 'source-map',
  plugins:[],
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude:/node_modules/,
        include: __dirname,
        loader: 'babel-loader'
      },
      {
        test:/\.styl$/,
        exclude: /node_modules/,
        include:__dirname,
        loader:'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: __dirname,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  }
}

if (env === 'production') {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}

module.exports = config;