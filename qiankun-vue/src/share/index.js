class Shared {
  /**
   * 获取 Token
   */
  getNumber() {
    // 子应用独立运行时，在 localStorage 中获取 number
    return localStorage.getItem('number') || ''
  }

  /**
   * 设置 Token
   */
  setToken(number) {
    // 子应用独立运行时，在 localStorage 中设置 number
    localStorage.setItem('number', number)
  }
}

class SharedModule {
  static shared = new Shared()

  /**
   * 重载 shared
   */
  static overloadShared(shared) {
    SharedModule.shared = shared
  }

  /**
   * 获取 shared 实例
   */
  static getShared() {
    return SharedModule.shared
  }
}

export default SharedModule
