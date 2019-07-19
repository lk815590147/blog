<template>
  <div>
    <h1>
      哈哈哈
      <p>你好啊</p>
    </h1>

    <div class="img">
      <img src="../img/1.6.jpg" alt />
      <p>嘻嘻嘻</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@mainColor: #ccc;
div{
  background: @mainColor;
}
h1 {
  color: red;
  > p {
    color: aqua;
    cursor: pointer;
  }
}
.img {
  text-align: center;
  img {
    width: 120px;
    height: 120px;
  }
  p {
    font-size: 20px;
  }
}
</style>


