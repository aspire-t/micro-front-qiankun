<template>
  <div class="home">
    这个是qiankun-base
    {{ num }}
    <button type="primary" @click="add">+1</button>
  </div>
</template>

<script>
import actions from '@/shared/actions'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      num: 0,
    }
  },
  mounted() {
    this.initActions()
  },
  methods: {
    initActions() {
      // 注册一个观察者函数
      actions.onGlobalStateChange((state, prevState) => {
        console.log(111111111111)
        // state: 变更后的状态; prevState: 变更前的状态
        this.num = state.number
        console.log('主应用观察者：number 改变前的值为 ', prevState.number)
        console.log(
          '主应用观察者：number发生改变，改变后的 number 的值为 ',
          state.number
        )
      })
    },
    add() {
      let number = this.num + 1
      // 登录成功后，设置 token
      actions.setGlobalState({ number })
    },
  },
}
</script>
