const path = require("path");

module.exports = {
  entry: path.resolve("./app/index.js"),
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/, loader: "eslint-loader", exclude: nodeModules
      // },
      {test: /\.js$/, use: "babel-loader", exclude: [path.resolve("./node_modules"), path.resolve("./lib")]}
    ]
  }
};
