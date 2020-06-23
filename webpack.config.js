const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  public: path.join(__dirname, 'public'), 
  dist: path.join(__dirname, 'dist') 
}

const plugins = [
  new CleanWebpackPlugin(), 
  new HTMLWebpackPlugin({
    title: 'BingoBoard',
    meta: { viewport: `width=device-width,
    initial-scale=1, shrink-to-fit=no` },
    favicon: './public/favicon.png',
  }),
  new CopyWebpackPlugin({patterns:[
    { from: 'public', to: 'public'}
  ]})
]
module.exports = {
  mode: 'development',
  watch: true, // for webpack
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
  },
  entry: './src/index.ts',
  output: {
    filename: './bundle.[hash].js',
    path: PATHS.dist,
    publicPath: '/',
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        // test: /\.css$/i,
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          // 'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
}
