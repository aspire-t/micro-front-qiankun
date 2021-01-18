<template>
  <div class="home">
    这个是qiankun-base
    <el-button type="primary" icon="el-icon-edit" @click="getNumber"
      >+1</el-button
    >
    <strong>{{ reduxNumber }}</strong>
  </div>
</template>

<script>
import shared from '@/shared'

export default {
  name: 'Home',
  data() {
    return {
      reduxNumber: 0,
    }
  },
  mounted() {
    this.getNumber()
  },
  methods: {
    getNumber() {
      shared.setNumber(this.reduxNumber + 1)
      this.reduxNumber = shared.getNumber()
    },
  },
}
</script>
