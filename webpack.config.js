const HtmlWebpackPlugin = require("html-webpack-plugin"); // plugin for render HTML
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // plugin for load separate CSS
const path = require("path");

//3
const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";

const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : null;

module.exports = {
  mode,
  target,
  devtool,
  // add devServer, "hot: true" for instance refresh (ex. styles)
  devServer: {
    port: 3030,
    open: true,
    hot: true,
  },
  // mode: "development",
  entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.js")], // 1. directory from with we take the resources
  output: {
    // output where we put all files
    path: path.resolve(__dirname, "dist"),
    clean: true, // clean every time
    filename: "[name].[contenthash].js", // 2. may be standard file name example "final.js" or "main.index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"), // 4. path to our main html file
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      // 5. add loader witch allows to webpack understand how to load another type of files
      {
        test: /\.html&$/i, //test property identifies which file or files should be transformed
        loader: "html-loader", //use property indicates which loader should be used to do the transforming
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name]ext",
        },
      },
    ],
  },
};
