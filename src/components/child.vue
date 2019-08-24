<template>
  <div class="main">
    <h1 class="item">标题</h1>
    <h1 class="item">标题</h1>
    <h1 class="item">标题</h1>
    <p class="item">这是锻若</p>
    <p class="item">这是锻若</p>
    <span class="item">这是span</span>
    <span class="item">这是span</span>
    <span class="item">这是span</span>
    <p class="item">这是锻若</p>
    <p class="item">这是锻若</p>
    <p class="item">这是锻若</p>

    <div class="container"></div>
  </div>
</template>


<style lang="less" scoped>
// 按照个数来算。上面有7个，p:nth-child(3)是代表上面7个的第三个，不管便签的问题，如果你遇到的不是p便签，它的样式就不会改变,遇到就改变
// p:nth-child(3),
// p:nth-child(7),
// p:nth-child(5) {
//   color: red;
// }

// nth-of-type type是类型的意思，也就是说nth-of-type(3)同一个类型的第三个，比如p h1 span 他们都是相同的类型
.item:nth-of-type(3) {
  color: red;
}

</style>

<script>
export default {};
</script>


