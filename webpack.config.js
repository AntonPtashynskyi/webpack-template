const HtmlWebpackPlugin = require("html-webpack-plugin"); // plugin for render HTML
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // plugin for load separate CSS
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";

const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : null;

module.exports = {
  mode,
  target,
  devtool,
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"), // directory from with we take the resources
  output: {
    // output where we put all files
    path: path.resolve(__dirname, "dist"),
    clean: true, // clean every time
    filename: "[name].[contenthash].js", // may be standard file name example "final.js" or "main.index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"), // path to our main html file
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      // add loader witch allows to webpack understand how to load another type of files
      {
        test: /\.html&$/i, //test property identifies which file or files should be transformed
        loader: "html-loader", //use property indicates which loader should be used to do the transforming
      },
      {
        test: /\.(c|sa|s)ss$/i, // (c|sa|s)ss mean the it may be css, sass scss
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
