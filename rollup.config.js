import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs", // commonJS
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm", // ES modules 
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: [
          ".js", ".ts", ".jsx", ".tsx"
        ]
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      commonjs(),
    ],
    external: [ "react", "react-dom" ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];