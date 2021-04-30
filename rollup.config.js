// 帮助寻找node_modules里的包
import resolve from 'rollup-plugin-node-resolve'
// 将非ES6语法的包转为ES6可用
import commonjs from 'rollup-plugin-commonjs'
// rollup 的 babel 插件，ES6转ES5
import babel from 'rollup-plugin-babel'
// 允许 Rollup 从 JSON 文件中导入数据
import json from 'rollup-plugin-json'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'jsEasy'
  },
  watch: {
    exclude: 'node_modules/**'
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: '**/node_modules/**',
      plugins: ['external-helpers']
    })
  ]
}
