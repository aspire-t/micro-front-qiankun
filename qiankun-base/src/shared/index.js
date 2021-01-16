import store from './store'

class Shared {
  /**
   * 获取 Number
   */
  getNumber() {
    const state = store.getState()
    return state.number || ''
  }

  /**
   * 设置 Number
   */
  setNumber(number) {
    // 将 number 的值记录在 store 中
    store.dispatch({
      type: 'SET_NUMBER',
      payload: number,
    })
  }
}

const shared = new Shared()
export default shared
