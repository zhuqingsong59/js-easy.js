// 帮助寻找node_modules里的包
import resolve from '@rollup/plugin-node-resolve'
// 将非ES6语法的包转为ES6可用
import commonjs from '@rollup/plugin-commonjs'
// 允许 Rollup 从 JSON 文件中导入数据
import json from '@rollup/plugin-json'
// rollup 的 babel 插件，ES6转ES5
import babel from '@rollup/plugin-babel'
// 文件压缩
import { terser } from 'rollup-plugin-terser'
// 开启本地服务
import serve from 'rollup-plugin-serve'
// 热更新(刷新浏览器)
import livereload from 'rollup-plugin-livereload'
// 替换浏览器端的全局变量
import replace from 'rollup-plugin-replace'

const env = process.env.NODE_ENV
const config = {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'jsEasy'
    },
    {
      file: 'dist/bundle.min.js',
      format: 'umd',
      name: 'jsEasy',
      plugins: [
        terser()
      ]
    }
  ],
  watch: {
    exclude: 'node_modules/**'
  },
  plugins: [
    resolve(),
    replace({'process.env.NODE_ENV': JSON.stringify(env)}),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
  ]
}
if (env === 'dev') {
  config.plugins.push(
    serve({
      open: true, // 自动打开页面
      port: 8000,
      openPage: './index.html', // 打开的页面
      contentBase: ''
    })
  )
  config.plugins.push(
    livereload('dist')
  )
}
console.log(config.plugins)
export default config
