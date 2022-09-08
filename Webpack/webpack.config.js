const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, "src"),
  entry: "./index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss?$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src/"),
    },
    extensions: [".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      publicPath: "./",
      title : 'App',
      template : __dirname + '/public/index.html'
    }),
  ],
  output: {
    filename: "[name].[contenthash].bundle.js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
