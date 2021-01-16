<template>
  <div class="home">
    这个是qiankun-base
    <el-button type="primary" icon="el-icon-edit">+1</el-button>
  </div>
</template>

<script>
import shared from '@/shared'

export default {
  name: 'Home',
  mounted() {
    getNumber()
  },
  methods: {
    async getNumber() {
      shared.setNumber(1)
      // this.$router.push('/')
    },
  },
}
</script>
