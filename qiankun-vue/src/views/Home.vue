<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <strong>{{ number }}</strong>
  </div>
</template>

<script>
// @ is an alias to /src
import SharedModule from '../share'
export default {
  name: 'Home',
  data() {
    return {
      userInfo: {},
      number: 0,
    }
  },
  mounted() {
    const shared = SharedModule.getShared()
    const propsNumber = shared.getNumber()

    this.getNumberInfo(propsNumber)
  },

  methods: {
    async getNumberInfo(propsNumber) {
      // console.log(token)
      this.number = propsNumber
    },
  },
}
</script>
