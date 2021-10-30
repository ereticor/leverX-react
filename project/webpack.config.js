const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 5050,
    contentBase: path.join(__dirname, 'public')
  }
};

module.exports = ({development}) => ({
  mode: development ? 'development' : 'production',
  entry: {
    main: './src/scripts/index.js',
    // search: './src/scripts/article.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      filename: 'main.js',
      template: './src/index.html',
    }),
    // new HtmlWebpackPlugin({
    //   chunks: ['search'],
    //   filename: 'search.js',
    //   template: './src/article.html',
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', 'tsx', 'jsx']
  },
  ...devServer(development)
});