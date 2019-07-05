const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "ts-loader",
          "tslint-loader",
        ],
        exclude: /node_modules/,
      },
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist/"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
