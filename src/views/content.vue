<template>
  <div class="back">
    <div class="cover">
      <div class="menu">
        <Nav></Nav>
      </div>
      <div class="content">
        <Breadcrumb></Breadcrumb>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
    Breadcrumb: () => import('@/components/Breadcrumb.vue'),
    Nav: () => import('@/components/nav.vue')
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '@/styles/mixin.scss';
.back {
  height: 100%;
  background: #000 url('../assets/timg3.jpg') right center no-repeat fixed;
  background-size: auto 80%;
  
  .cover {
    @include cover;
    .menu {
      position: absolute;
      margin: 40px 20px;
      box-sizing: border-box;
      // height: calc(100% - 80px);
      width: calc(20% - 40px);
      padding: 20px;
      @include content
    }
    .content {
      position: absolute;
      margin: 40px 20px 40px 0;
      box-sizing: border-box;
      left: 20%;
      height: calc(100% - 80px);
      width: calc(80% - 20px);
      padding: 40px;
      overflow: scroll;
      @include content;
    }
  }
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
</style>
