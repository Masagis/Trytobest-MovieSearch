const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/app.js', 'font-awesome/scss/font-awesome.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        test: /\.(css|scss)$/,
        use: [{
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run postcss actions
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        use: 'url-loader?limit=1024&name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=assets/images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug',
        ],
      },
      {
        test: /font-awesome\.config\.js/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: 'font-awesome-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/images/fav-icon.png',
      template: './src/template.html',
      filename: 'index.html',
      minify: 'production',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};