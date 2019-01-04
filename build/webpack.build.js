'use strict';

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtrsctPlugin = require('mini-css-extract-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new optimizeCssAssetsWebpackPlugin()
    ]
  },
  output: {
    publicPath: '//s.bauxuli.co/mysite/dist/',
    filename: 'js/[name].[chunkhash:5].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtrsctPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(['dist'], {root: path.resolve(__dirname, '..')}),
    new MiniCssExtrsctPlugin({
      filename: 'css/[name].[contenthash:5].css',
      chunkFilename: 'css/[name].[contenthash:5].css'
    })
  ]
})
