const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = {
  entry: ['./src/App.tsx'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  target: ['browserslist', 'es5'],
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.bundle.js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!(react-router))/,
        use: [
          'babel-loader',
          { loader: 'ts-loader', options: { transpileOnly: true } },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ProvidePlugin({ React: 'react' }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
