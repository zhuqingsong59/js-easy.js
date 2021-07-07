class RegExpUtil {
  constructor() {}
  // 替换
  replaceStr (str, substr, replacement = '') {
    const regexp = new RegExp(substr, 'g')
    return str.replace(regexp, replacement)
  }
  // // 判断是否是纯数字
  // isNumberStr (str) {
  //   return /^\d+$/.test(String(str))
  // }
  // // 判断是否是整数
  // isIntegerStr (str) {
  //   return /^\-?\d+$/.test(String(str))
  // }
  // // 判断是否为
  // isFloatStr (str) {
  //   return /^\d+\.?\d+$/.test(String(str))
  // }
  // // 去除字符串中不为数字的字符
  // setNumberStr (str) {
  //   return String(str).replace(/\D+/g, '')
  // }
}
export default new RegExpUtil()
