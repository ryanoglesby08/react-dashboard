const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./app/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "react-dashboard": path.resolve(__dirname, "../../dist/react-dashboard.es")
    }
  },
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/, loader: "eslint-loader", exclude: nodeModules
      // },
      {test: /\.js$/, use: "babel-loader", exclude: [path.resolve(__dirname, "../../node_modules"), path.resolve(__dirname, "../../dist")]}
    ]
  }
};
