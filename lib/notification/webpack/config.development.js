const base = require('./config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...base,
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: './public/index.html',
      template: './public/index.html'
    })
  ],
  devServer: {
    contentBase: './public/',
    port: 8080,
    publicPath: '/dist'
  }
};
