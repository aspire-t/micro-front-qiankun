<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
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
    }
  },
  mounted() {
    const shared = SharedModule.getShared()
    const token = shared.getNumber()

    this.getUserInfo(token)
  },

  methods: {
    async getUserInfo(token) {
      console.log(token)
    },
  },
}
</script>
