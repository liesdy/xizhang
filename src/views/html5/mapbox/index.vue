<template>
  <div>
    <h3>mapbox</h3>
    <router-link :to="{ name: 'mapboxStart'}">mapboxStart</router-link> | 
    <router-link :to="{ name: 'addMarker'}">addMarker</router-link> | 
    <router-link :to="{ name: 'markerHover'}">markerHover</router-link> | 
    <router-link :to="{ name: 'mapChangeTest'}">mapChangeTest</router-link> | 
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
