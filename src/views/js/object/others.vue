<template>
  <div class="content">
    <!-- <h3>原型链</h3> -->
    <h3>valueOf</h3>
    <pre>
      var obj = new Object();
      1 + obj // "1[object Object]"
    </pre>


    <h3>数组、字符串、函数、Date 对象  各自的 toString</h3>
    <pre>
      [1, 2, 3].toString() // "1,2,3"

      '123'.toString() // "123"

      (function () {
        return 123;
      }).toString()
      // "function () {
      //   return 123;
      // }"

      (new Date()).toString()
      // "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
    </pre>


    <h3>toString返回的类型</h3>
    <pre>
      Object.prototype.toString.call(2) // "[object Number]"
      Object.prototype.toString.call('') // "[object String]"
      Object.prototype.toString.call(true) // "[object Boolean]"
      Object.prototype.toString.call(undefined) // "[object Undefined]"
      Object.prototype.toString.call(null) // "[object Null]"
      Object.prototype.toString.call(Math) // "[object Math]"
      Object.prototype.toString.call({}) // "[object Object]"
      Object.prototype.toString.call([]) // "[object Array]"
    </pre>
    <h5>其他</h5>
    <pre>
      arguments 对象：返回[object Arguments]。
      函数：返回[object Function]。
      Error 对象：返回[object Error]。
      Date 对象：返回[object Date]。
      RegExp 对象：返回[object RegExp]。
      其他对象：返回[object Object]。
    </pre>
  </div>
</template>

<script>
export default {
  name: 'others',
  data () {
    return {
      route: null
    }
  },
  created() {
    // var obj = new Object();
    var obj = { a: 1}
    console.log('1 + obj:', 1 + obj) // "1[object Object]"
    console.log('obj:', obj) // "1[object Object]"
    console.log('obj.valueOf:', obj.valueOf()) // "1[object Object]"
  }
}
</script>

<style lang="sass" scoped>

</style>