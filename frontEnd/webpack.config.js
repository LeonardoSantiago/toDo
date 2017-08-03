const wepback = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '/node_modules')
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [
      {test: /.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader', 'style-loader')
      }, {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file-loader'
      }
    ]
  }
}