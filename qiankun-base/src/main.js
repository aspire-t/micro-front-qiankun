import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'

// Vue.config.productionTip = false
Vue.use(ElementUI)

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10001',
    container: '#vue',
    activeRule: '/vue',
    props: {
      routerBase: '/vue',
    },
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
    props: {
      routerBase: '/react',
    },
  },
  {
    name: 'staticApp',
    entry: '//localhost:10400',
    container: '#frame',
    activeRule: '/static',
    props: {
      routerBase: '/static',
    },
  },
]

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    },
  ],
  afterMount: [
    (app) => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    },
  ],
  afterUnmount: [
    (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    },
  ],
})

start()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
