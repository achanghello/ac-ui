import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import path from "path";
import babel from '@rollup/plugin-babel';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
export default {
  input: path.resolve(__dirname, "../packages/ac-ui/index.ts"),
  output: [
    {
      format: 'esm', // 输出模块格式
      file: 'dist2/index.esm.js', // 输出文件路径
      sourcemap: true, // 生成 sourcemap
    },
    {
      format: 'cjs',
      file: 'dist/index.js',
      sourcemap: true,
    },
    {
      format: 'umd',
      name: 'YourLibraryName', // 全局变量名
      file: 'dist/index.min.js',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      // 添加 preset-react 以支持 JSX 语法
      presets: ['@babel/preset-react'],
      // 添加 plugin-transform-runtime 以支持 ES6+ 语法
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    }),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 添加 .tsx 扩展名
    }),
    commonjs({
      include: /node_modules/,
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 添加 .tsx 扩展名
    }),
    vue({
      target: 'browser',
    }),
    typescript({
      tsconfig: './tsconfig.json',
      // 添加 jsx 选项，值为 "preserve"
      jsx: 'preserve',
      // 设置使用 tslib 来优化构建结果
      tslib: require('tslib'),
      exclude: [
        'node_modules',
        'website'
    ]
    }),
  ],
  external: [
    // 外部依赖
    'vue',
  ],
};
