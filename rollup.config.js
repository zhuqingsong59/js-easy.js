// 允许 Rollup 从 JSON 文件中导入数据
import json from 'rollup-plugin-json'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'jsEasy'
  },
  plugins: [ json() ]
}
