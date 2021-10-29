const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/js/app.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    compress: true,
    port: 9000,
  },

  devtool: "source-map",

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new FaviconsWebpackPlugin("src/images/favicon-32x32.png"),
  ],
};
