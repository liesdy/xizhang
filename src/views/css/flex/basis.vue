<template>
  <div class="content">
    <h3>box1 flex: 1  相当于 flex: 1 1 0%,没有设置元素具体宽度</h3>  
    <p>实测结果：仅显示元素内容的最小宽度</p>
    <div class='box1'>
      <div class="item item1">
          basis: 0% | {{ aa1 }}
      </div>
      <div class="item item2">
          basis: 0% | {{ bb1 }}
      </div>
      <div class="item item3">
          basis: 0% | {{ cc1 }}
      </div>
    </div>
    <h3>box2 flex: auto  相当于 flex: 1 1 auto,没有设置元素具体宽度</h3>  
    <p>实测结果：仅显示元素内容的最小宽度</p>
    <div class='box2'>
      <div class="item item1">
          basis: auto | {{ aa2 }}
      </div>
      <div class="item item2">
          basis: auto | {{ bb2 }}
      </div>
      <div class="item item3">
          basis: auto | {{ cc2 }}
      </div>
    </div>
    <h3>box3 flex: 1  相当于 flex: 1 1 0%,设置了元素具体宽度,元素总宽度小于父级元素</h3>  
    <p>实测结果：显示元素具体宽度</p>
    <div class='box3'>
      <div class="item item1">
          basis: 0% | {{ basewidth }}：{{ aa3 }}
      </div>
      <div class="item item2">
          basis: 0% | {{ basewidth }}：{{ bb3 }}
      </div>
      <div class="item item3">
          basis: 0% | {{ basewidth }}：{{ cc3 }}
      </div>
    </div>

    <h3>box4 flex: 1  相当于 flex: 1 1 0%,设置了元素具体宽度,元素总宽度大于父级元素</h3>  
    <p>实测结果：撑满，但没有超出</p>
    <div class='box4'>
      <div class="item item1">
          basis: 0% | {{ basewidth2 }}：{{ aa4 }}
      </div>
      <div class="item item2">
          basis: 0% | {{ basewidth2 }}：{{ bb4 }}
      </div>
      <div class="item item3">
          basis: 0% | {{ basewidth2 }}：{{ cc4 }}
      </div>
    </div>

    <h3>box5 flex: auto  相当于 flex: 1 1 auto,设置了元素具体宽度,元素总宽度小于父级元素</h3>  
    <p>实测结果：显示元素具体宽度</p>
    <div class='box5'>
      <div class="item item1">
          basis: auto | {{ basewidth }}： {{ aa5 }}
      </div>
      <div class="item item2">
          basis: auto | {{ basewidth }}： {{ bb5 }}
      </div>
      <div class="item item3">
          basis: auto | {{ basewidth }}： {{ cc5 }}
      </div>
    </div>

    <h3>box6 flex: auto  相当于 flex: 1 1 auto,设置了元素具体宽度,元素总宽度大于父级元素</h3>  
    <p>实测结果：撑满，但没有超出</p>
    <div class='box6'>
      <div class="item item1">
          basis: auto | {{ basewidth }}： {{ aa6 }}
      </div>
      <div class="item item2">
          basis: auto | {{ basewidth }}： {{ bb6 }}
      </div>
      <div class="item item3">
          basis: auto | {{ basewidth }}： {{ cc6 }}
      </div>
    </div>
    <p>推测结论：</p>
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
      basewidth2: 300,
      // basewidth: 400,
      aa1: '',
      bb1: '',
      cc1: '',
      aa2: '',
      bb2: '',
      cc2: '',
      aa3: '',
      bb3: '',
      cc3: '',
      aa4: '',
      bb4: '',
      cc4: '',
      aa5: '',
      bb5: '',
      cc5: '',
      aa6: '',
      bb6: '',
      cc6: ''
    }
  },
  mounted () {
    // this.$nextTick(() => {
    this.showWidth()
    // })
  },
  updated () {
    // this.$nextTick(() => {
    //   this.showWidth()
    // })
  },
  methods: {
    showWidth () {
      console.log('resize')
      this.aa1 = document.querySelector('.box1 .item1').offsetWidth
      this.bb1 = document.querySelector('.box1 .item2').offsetWidth
      this.cc1 = document.querySelector('.box1 .item3').offsetWidth
      this.aa2 = document.querySelector('.box2 .item1').offsetWidth
      this.bb2 = document.querySelector('.box2 .item2').offsetWidth
      this.cc2 = document.querySelector('.box2 .item3').offsetWidth
      this.aa3 = document.querySelector('.box3 .item1').offsetWidth
      this.bb3 = document.querySelector('.box3 .item2').offsetWidth
      this.cc3 = document.querySelector('.box3 .item3').offsetWidth
      this.aa4 = document.querySelector('.box4 .item1').offsetWidth
      this.bb4 = document.querySelector('.box4 .item2').offsetWidth
      this.cc4 = document.querySelector('.box4 .item3').offsetWidth
      this.aa5 = document.querySelector('.box5 .item1').offsetWidth
      this.bb5 = document.querySelector('.box5 .item2').offsetWidth
      this.cc5 = document.querySelector('.box5 .item3').offsetWidth
      this.aa6 = document.querySelector('.box6 .item1').offsetWidth
      this.bb6 = document.querySelector('.box6 .item2').offsetWidth
      this.cc6 = document.querySelector('.box6 .item3').offsetWidth
    }
  }
}
</script>

<style scoped lang='scss'>
@import '@/styles/mixin.scss';
$item-width: 200px;
$item-width2: 300px;

// $item-width: 500px;
// $item-width: 400px;
// $item-width: 800px;
.box1 {
  @include box;
  flex: 1;
  .item1 {
    background: skyblue;
  }
  .item2 {
    background: red;
  }
  .item3 {
    background: violet;
  }
}
.box2 {
  @include box;
  flex: auto;
  .item1 {
    background: skyblue;
  }
  .item2 {
    background: red;
  }
  .item3 {
    background: violet;
  }
}
.box3 {
  @include box;
  flex: 1;
  .item1 {
    width: $item-width;
    background: skyblue;
  }
  .item2 {
    width: $item-width;
    background: red;
  }
  .item3 {
    width: $item-width;
    background: violet;
  }
}
.box4 {
  @include box;
  flex: 1;
  .item1 {
    width: $item-width2;
    background: skyblue;
  }
  .item2 {
    width: $item-width2;
    background: red;
  }
  .item3 {
    width: $item-width2;
    background: violet;
  }
}
.box5 {
  @include box;
  flex: auto;
  .item1 {
    width: $item-width;
    background: skyblue;
  }
  .item2 {
    width: $item-width;
    background: red;
  }
  .item3 {
    width: $item-width;
    background: violet;
  }
}
.box6 {
  @include box;
  flex: auto;
  .item1 {
    width: $item-width2;
    background: skyblue;
  }
  .item2 {
    width: $item-width2;
    background: red;
  }
  .item3 {
    width: $item-width2;
    background: violet;
  }
}
.boxx {
  padding: 10px 0;
  display: flex;
  flex: 1;
  background-color: #999;
  justify-content: space-around;
  width: 800px;
  margin: 50px auto;
  .item1 {
    /**
      1. grow = 1时 $item-width = 500时  实际宽度 400， 缩小了100
     */
    // flex-basis: $item-width;
    background: skyblue;
    // flex-basis: 0%
  }
  .item2 {
    /**
     */
    // flex-basis: $item-width;
    background: red;
    // flex-basis: 0%
  }
  .item3 {
    /**
      grow = 0时 该多大就多大
     */
    // flex-basis: $item-width;
    background: violet;
    // flex-basis: 0%
  }
}
</style>
