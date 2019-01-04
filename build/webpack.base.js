'use strict';

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

function getHtmlTemplate(name) {
  return {
    template: path.resolve(__dirname, `../src/views/${name}.html`),
    filename: `views/${name}.html`,
    favicon: path.resolve(__dirname, '../favicon.ico'),
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true
    },
    hash: true
  }
}

const baseConfig = {
  entry:{
    index: path.resolve(__dirname, '../src/js/index.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js'
  },
  plugins: [
    new htmlWebpackPlugin(getHtmlTemplate('index'))
  ]
}

module.exports = baseConfig;
