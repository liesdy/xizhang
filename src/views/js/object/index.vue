<template>
  <div>
    <router-link :to="{ name: 'defineProperty'}">defineProperty</router-link> | 
    <router-link :to="{ name: 'proxy'}">proxy</router-link> | 
    <router-link :to="{ name: 'others'}">others</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'flex',
  data () {
    return {
      // basewidth: 800,
      // basewidth: 600,
      basewidth: 600,
      // basewidth: 400,
      aa: '',
      bb: '',
      cc: ''
    }
  },
  mounted () {
  },
  updated () {
  },
  methods: {
  }
}
</script>

<style scoped lang='scss'>
  .content {
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    text-align: left;
    color: #666;
    text-shadow: 0 0 15px skyblue;
  }
</style>
