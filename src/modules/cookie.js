class Cookie {
  constructor() {}
  set (name, value, day) {
    if (day !== 0) { // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
      const expires = day * 24 * 60 * 60 * 1000
      const date = new Date(+new Date() + expires)
      document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/'
    } else {
      document.cookie = name + '=' + value + ';path=/'
    }
  }
  get(name) {
    let arr = null
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    arr = document.cookie.match(reg)
    if (arr) {
      return arr[2]
    } else {
      return null
    }
  }
  remove(name) {
    this.set(name, ' ', -1)
  }
}
export default new Cookie()
