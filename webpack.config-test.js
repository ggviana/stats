const nodeExternals = require('webpack-node-externals')
const path = require('path')
 
module.exports = {
  target: 'node',
  externals: [nodeExternals()],
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
      lib: path.join(__dirname, 'lib')
    }
  }
}