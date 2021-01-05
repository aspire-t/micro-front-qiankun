import Vue from 'vue'
import App from './App.vue'
import router from './router'
import actions from './shared/actions'

Vue.config.productionTip = false

let instance = null

function render(props = {}) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props)
  }

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#vueApp')
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 三个生命周期方法, 内容可以为空，但是必须要导出
export async function bootstrap() {
  console.log('vueApp start')
}

export async function mount(props) {
  render(props)
  // props.onGlobalStateChange((state, prev) => {
  //   // state: 变更后的状态; prev 变更前的状态
  //   console.log(state, prev)
  // })
}

export async function unmount() {
  instance.$destroy()
}
