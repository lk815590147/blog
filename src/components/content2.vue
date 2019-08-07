<template>
  <div>
    <div class="container">
      <div class="domain-img">
        <img src="../img/20190212035139.jpg" alt />
        <p>哈哈哈</p>
        <p>名字长点很拉风</p>
      </div>
      <div class="domain-img">
        <img src="../img/20190212035857.jpg" alt />
      </div>
      <div class="domain-img">
        <img src="../img/20190212044553.png" alt />
      </div>
      <div class="domain-img">
        <img src="../img/20190531111257.jpg" alt />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  background-color: #ccc;
  display: flex;
  justify-content: center;
  > .domain-img {
    background-color: #fff;
    width: 275px;
    height: 466px;
    margin-left: 20px;
    box-shadow: 1px 1px 10px #ddd;
    border-radius: 10px;
    > img {
      width: 100%;
      height: 366px;
    }
    > p {
      text-align: center;
      cursor: pointer;
    }
    &:hover {
      color: red;
    }
  }
}
</style>

<script>
export default {};
</script>


