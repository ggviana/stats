const webpack = require('webpack')
const path    = require('path')

const PATHS = {
  src:  path.join(__dirname, 'src'),
  lib:  path.join(__dirname, 'lib'),
  dist: path.join(__dirname, 'dist')
}

module.exports = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.dist,
    filename: 'stats.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: "node_modules",
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    alias: {
      lib: PATHS.lib
    }
  }
}