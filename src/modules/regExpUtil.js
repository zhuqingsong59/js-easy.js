class RegExpUtils {
  constructor() {}
  replaceStr (str, substr, replacement = '') {
    const regexp = new RegExp(substr, 'g')
    return str.replace(regexp, replacement)
  }
}
export default new RegExpUtils()
