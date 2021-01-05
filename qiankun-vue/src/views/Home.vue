<template>
  <div class="home">
    <div>{{ propsNumber }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import actions from '@/shared/actions'

// const actions = new Actions()

export default {
  name: 'Home',
  data() {
    return {
      propsNumber: 0,
    }
  },
  components: {
    HelloWorld,
  },
  mounted() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange((state, prev) => {
      const { number } = state
      this.propsNumber = number
      console.log(number)
    }, true)
  },
  methods: {},
}
</script>
