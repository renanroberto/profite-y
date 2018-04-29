const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  output: { path: path.join(__dirname, "dist/arquivos") },

  watch: true,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },

  plugins: [
    // Copy the images folder and optimize all the images
    new CopyWebpackPlugin([{
      from: 'src/images/'
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].[hash].css"
    })
  ]
}