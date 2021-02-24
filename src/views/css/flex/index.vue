<template>
  <div>
    <router-link to="/css/flex/shrink">flex-shrink</router-link>
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
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    text-align: left;
  }
</style>
