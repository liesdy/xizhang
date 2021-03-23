<template>
  <div class="content" v-if="route">
    route.matched: <span v-for="item in route.matched" :key="item.name">{{ item.name }} | </span>

    <p> // 下面这行已经验证过，beforeRouteEnter 是可以直接通过这种方式进行跳转的 </p>
    <p> // next({ name: 'flex' }) </p>
  </div>
</template>

<script>
export default {
  name: 'beforeRouterEnter',
  data () {
    return {
      route: null
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('to: ', to)
    console.log('from: ', from)
    next (vm => {
      vm.route = vm.$route
      console.log('vm.route: ', vm.route)
    })    
    
  }  
}
</script>

<style lang="sass" scoped>

</style>