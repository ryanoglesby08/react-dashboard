const path = require("path");

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel";

export default {
  entry: path.resolve(__dirname, "./src/main.js"),
  targets: [
    {format: "es", dest: path.resolve(__dirname, "./dist/react-dashboard.es.js")},
    {format: "cjs", dest: path.resolve(__dirname, "./dist/react-dashboard.cjs.js")}
  ],
  sourceMap: true,

  plugins: [
    resolve(),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      babelrc: false, // Override the .babelrc file and disable modules transpilation
      presets: [
        ["env", {"modules": false}],
        "react",
        "stage-2"
      ],
      plugins: ["external-helpers"],
      exclude: "node_modules/**"
    })
  ],

  external: "react"
}
