const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const webpack = require('webpack')


module.exports = merge(common, {
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new UglifyJSPlugin({
        compress: {
          drop_console: true
        }
      }),
      new ExtractTextPlugin({filename: "css/bundle.min.css"}),
      new ZipPlugin({
        filename:  __dirname + ".bundle.zip",
      })
    ],
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          publicPath: "../",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders:1,
                import: false, // PostCSS-import is handling our imports.
                minimize: true
              }
            }, 
            {
              loader: "postcss-loader"
            }
            ]
        })
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: "js/bundle.min.js",
  }
})
