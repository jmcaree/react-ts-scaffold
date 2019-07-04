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
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist/"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
