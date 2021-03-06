const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    open: true,
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader',
      options: {
        presets: ['react', 'env'],
        plugins: ['transform-class-properties'],
      },
    },
    {
      test: /\.css$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: ['style-loader', 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
