<template>
  <div class="back">
    <div class="cover">
      <div class="content">
        <Nav></Nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  components: {
    Nav: () => import('@/components/nav.vue')
  },
  data() {
    return {
    }
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
    .content {
      position: absolute;
      margin: 40px 20px;
      box-sizing: border-box;
      height: calc(100% - 80px);
      width: 42%;
      padding: 20px;
      @include content;
      
    }
  }
  
  
}
</style>
