import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import { getPackagesSync } from "@lerna/project";
import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";
// import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';

const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes("@ac-ui"));
export default {
  input: path.resolve(__dirname, "../packages/ac-ui/index.ts"),
  output: {
    format: "esm",
    file: "dist/index.esm.js",
  },
  plugins: [
    babel({
      babelHelpers: "runtime",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      // 添加 preset-react 以支持 JSX 语法
      presets: ["@babel/preset-react"],
      // 添加 plugin-transform-runtime 以支持 ES6+ 语法
      plugins: [["@babel/plugin-transform-runtime", { useESModules: true }]],
      exclude: ["node_modules", "website"],
    }),
    nodeResolve(),
    vue({
      target: "browser",
    }),
    typescript({
      exclude: ["node_modules", "website"],
    }),
    // postcss({
    //   extract: true,
    //   modules: true,
    //   use: ['sass'],
    // }),
    scss({
      output: 'dist/haha.css'
    })
  ],
  external(id) {
    return /^vue/.test(id);
  },
};
