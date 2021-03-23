<template>
  <div class="content">
    <!-- <h3>原型链</h3> -->
    <h3>get和set</h3>
    <pre>
      let obj = Object.defineProperty({}, 'p', {
        get: function () {
          console.log('get')
          return 'getter'
        },
        set: function (value) {
          console.log('setter: ' + value)
        }
      })


      console.log('obj.p: ', obj.p)
      // get
      // obj.p: getter

      let a = obj
      console.log('obj: ', obj) 
      // {}

      console.log('a: ', a) 
      // a: {}
      
      let b = obj.p
      // get

      console.log('b: ', b)
      // b:  getter
    </pre>
    <p>由此可见,即使只有单纯的赋值行为，就可以出发getter了</p>

    <h3>get和set的进一步测试</h3>
    <pre>
      var obj ={
        $n : 5,
        get next() { return this.$n++ },
        set next(n) {
          if (n >= this.$n) this.$n = n;
          else throw new Error('新的值必须大于当前值');
        }
      };

      console.log('obj.next: ', obj.next)  // 5

      obj.next = 10;
      console.log('obj.next: ', obj.next)  // 10

      obj.next = 5;
      console.log('obj.next: ', obj.next)
    </pre>
    <p>注意，如果将 throw那行代码去掉，第三次会输出11  也就是 $n++, 如果将$n++ 改为 ++$n  则会输出 6  和 11</p>

    <h3>对象的拷贝</h3>
    <p>常规方式循环遍历对象属性进行拷贝，如果遇到存取器定义的属性，会只拷贝值</p>
    <pre>
      extend({}, {
        get a() { return 1 }
      })
      // {a: 1}
    </pre>
    <p>为了解决这个问题，我们可以通过Object.defineProperty方法来拷贝属性。</p>
    <pre>
      var extend = function (to, from) {
        for (var property in from) {
          if (!from.hasOwnProperty(property)) continue;
          Object.defineProperty(
            to,
            property,
            Object.getOwnPropertyDescriptor(from, property)
          );
        }

        return to;
      }

      extend({}, { get a(){ return 1 } })
      // { get a(){ return 1 } })
    </pre>
    <p>上面代码中，hasOwnProperty那一行用来过滤掉继承的属性，否则可能会报错，因为Object.getOwnPropertyDescriptor读不到继承属性的属性描述对象。</p>
  </div>
</template>

<script>
export default {
  name: 'beforeRouterEnter',
  data () {
    return {
    }
  },
  mounted() {
    /** 
     * get
     * */
    // 写法1
    // let obj = Object.defineProperty({}, 'p', {
    //   get: function () {
    //     console.log('get')
    //     return 'getter'
    //   },
    //   set: function (value) {
    //     console.log('setter: ' + value)
    //   }
    // })
    // 写法2
    // let obj = {
    //   get p() {
    //     console.log('get')
    //     return 'getter';
    //   },
    //   set p(value) {
    //     console.log('setter: ' + value);
    //   }
    // }
    // --------------开始测试--------------
    // console.log('obj.p: ', obj.p)
    // let a = obj
    // console.log('obj: ', obj)
    // console.log('a: ', a)
    // let b = obj.p
    // console.log('b: ', b)

    /** 
     * get和set的进一步测试
     * */
    var obj ={
      $n : 5,
      get next() { return this.$n++ },
      set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw new Error('新的值必须大于当前值');
      }
    };

    console.log('obj.next: ', obj.next)  // 5

    obj.next = 10;
    console.log('obj.next: ', obj.next)  // 10

    obj.next = 5;
    console.log('obj.next: ', obj.next)
    // Uncaught Error: 新的值必须大于当前值
  }
}
</script>

<style lang="sass" scoped>

</style>