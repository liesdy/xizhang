<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">HOME</router-link>
    </div>
    <!-- <div class="nav">
      <router-link to="/flex">css</router-link> |
      <router-link to="/html5">html5</router-link> |
      <router-link to="/js">js</router-link> |
      <router-link to="/link">link</router-link> |
      <router-link to="/proj">proj</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

.nav {
  text-align: center;
  padding: 10px 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
