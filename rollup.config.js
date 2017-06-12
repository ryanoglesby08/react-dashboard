const path = require("path");

import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel";

export default {
  entry: path.resolve("./src/main.js"),
  targets: [
    {format: "es", dest: path.resolve("./dist/react-dashboard.es.js")},
    {format: "cjs", dest: path.resolve("./dist/react-dashboard.cjs.js")}
  ],
  sourceMap: true,

  plugins: [
    resolve(),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      plugins: ["external-helpers"],
      exclude: "node_modules/**"
    })
  ],

  external: ["react", "prop-types"]
}
