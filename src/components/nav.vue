<template>
  <div class="nav">
    <div class="top">
      <router-link to="/">HOME</router-link>
    </div>
    <div v-for="item in routeTree" :key="item.name" class="nav-item">
      <h3><router-link :to="{ name: item.name }">{{ item.title }}</router-link></h3>
      <ul v-if="item.children">
        <li v-for="child in item.children" :key="child.name"><router-link :to="{ name: child.name }">{{child.title}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { routeTree } from '@/router'
export default {
  name: 'HelloWorld',
  data() {
    return {
      routeTree
    }
  },
  props: {
    msg: String
  },
  created () {
    console.log('routeTree:', routeTree) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '@/styles/mixin.scss';
.nav {
  text-align: left;
  .top {
    text-align: center;
    a {
      color: $primary;
      font-weight: bold;
      text-decoration: none;
    }
  }
  .nav-item {
    margin-bottom: 20px;
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
  }
}
</style>
