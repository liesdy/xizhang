<template>
  <div class="content">
    <h1>upload</h1>
    <router-link :to="{ name: 'drop'}">drop</router-link> | 
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
</style>
