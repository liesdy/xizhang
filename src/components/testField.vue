<template>
  <div class="hello">
    {{content}}
    <editor v-model='content'></editor>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
    editor: () => import('@/plugins/editor.vue')
  },
  data() {
    return {
      content: `` // 富文本编辑器默认内容
      // content: `<p></p><p>fadsfsafsadfafas</p><ol></ol>` // 富文本编辑器默认内容
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.scss-test {
  .contain {
    color: red;
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
</style>
