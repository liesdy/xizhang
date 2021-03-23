<template>
  <div class="content">
    <div class='box2'>
      <!-- <div class="item item1">grow: 1</div>
      <div class="item item2">grow: 2</div>
      <div class="item item3">grow: 0</div> -->
      <div class="item item1">grow: 0.3 | {{ basewidth }}：{{ aa }}</div>
      <div class="item item2">grow: 0.6 | {{ basewidth }}：{{ bb }}</div>
      <div class="item item3">grow: 0 | {{ basewidth }}：{{ cc }}</div>
    </div>
    <p>推测结论：</p>
    <p>各项目的grow值相加小于1时。各项目的宽度应该是在basis的基础上增加basis * grow</p>
    <p>当各项目的grow值相加大于1时，则以相加和 1 为上限, 按比例分配个项目自身扩张的值</p>
    <p>所以两个项目grow分别是 0.4 0.8   实际上和grow 分别为  1  2   在计算结果上没有区别</p>
    <p>注意:各项目原本宽度和小于容器宽度，且grow值相加小于1的情况下，必然会出现扩张程度不够导致总宽度小于容器宽度</p>
  </div>
</template>
<script>
export default {
  name: 'flex',
  data () {
    return {
      // basewidth: 800,
      // basewidth: 600,
      basewidth: 200,
      // basewidth: 400,
      aa: '',
      bb: '',
      cc: ''
    }
  },
  mounted () {
    // this.$nextTick(() => {
    this.showWidth()
    // })
  },
  updated () {
    this.$nextTick(() => {
      this.showWidth()
    })
  },
  methods: {
    showWidth () {
      console.log('resize')
      this.aa = document.querySelector('.item1').offsetWidth
      console.log('this.aa: ', this.aa)
      this.bb = document.querySelector('.item2').offsetWidth
      this.cc = document.querySelector('.item3').offsetWidth
    }
  }
}
</script>

<style scoped lang='scss'>
$item-width: 200px;
// $item-width: 500px;
// $item-width: 400px;
// $item-width: 800px;
.box2 {
  padding: 10px 0;
  display: flex;
  background-color: #999;
  justify-content: space-around;
  width: 800px;
  margin: 50px auto;
  .item1 {
    /**
      1. grow = 1时 $item-width = 500时  实际宽度 400， 缩小了100
      2. grow = 1时 $item-width = 600时  实际宽度 400， 缩小了200
      3. grow = 2时 $item-width = 600时  实际宽度 400， 缩小了200
      4. grow = 0.1时 $item-width = 600时  实际宽度 540， 缩小了60
      5. grow = 0.2时 $item-width = 600时  实际宽度 480， 缩小了120
      6. grow = 0.3时 $item-width = 600时  实际宽度 420， 缩小了180
      7. grow = 0.4时 $item-width = 600时  实际宽度 400， 缩小了200
     */
    flex-basis: $item-width;
    background: skyblue;
    flex-grow: 0.3
  }
  .item2 {
    /**
      1. grow = 2时 $item-width = 500时  实际宽度 300， 缩小了200
      2. grow = 2时 $item-width = 600时  实际宽度 200， 缩小了400
      3. grow = 4时 $item-width = 600时  实际宽度 200， 缩小了400
      4. grow = 0.2时 $item-width = 600时  实际宽度 480， 缩小了120
      5. grow = 0.4时 $item-width = 600时  实际宽度 360， 缩小了240
      6. grow = 0.6时 $item-width = 600时  实际宽度 240， 缩小了360
      7. grow = 0.8时 $item-width = 600时  实际宽度 200， 缩小了400
     */
    flex-basis: $item-width;
    background: red;
    flex-grow: 0.6
  }
  .item3 {
    /**
      grow = 0时 该多大就多大
     */
    flex-basis: $item-width;
    background: violet;
    flex-grow: 0
  }
}
</style>
