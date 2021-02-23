<template>
  <div class='box2'>
    <div class="item item1">111111111111111111111</div>
    <div class="item item2">222222222222222222222</div>
    <div class="item item3">333333333333333333333</div>
  </div>
</template>

<style scoped lang='scss'>
// $item-width: 600px;
$item-width: 800px;
.box2 {
  display: flex;
  background-color: #eee;
  justify-content: space-around;
  margin-top: 50px;
}
.box2 .item1 {
  /* 原宽度为800px时 */
  /* 424.95px */

  /* 宽度为600px时 */
  /* 474px */
  /* 600-474=126 */
  width: $item-width;
  background: #999;
  flex-shrink: 1
}
.box2 .item2 {
  /* 原宽度为800px时 */
  /* 197.05px */

  /* 宽度为600px时 */
  /* 348px */
  /* 600-348=252 */
  width: $item-width;
  background: red;
  flex-shrink: 2
}
.box2 .item3 {
  /* 原宽度为800px时 */
  /* 800px */

  /* 宽度为600px时 */
  /* 600px */
  width: $item-width;
  background: green;
  flex-shrink: 0
}
</style>
