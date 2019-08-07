<template>
  <div>
    <div class="container">
      <div class="do-main">
          <img src="../img/8.jpg" alt="">
      </div>
      <div class="do-main">
           <img src="../img/9.jpg" alt="">
      </div>
      <div class="do-main">
           <img src="../img/10.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container{
    padding: 0;
    margin-top: 100px;
    background-color: #ccc;
    width: 100%;
    display: flex;
    justify-content: center;
    .do-main{
        margin-top: 50px;
        margin-left:20px; 
        background-color: #fff;
        img{
            width: 390px;
            height: 220px;
        }
    }
}
</style>

<script>
export default {};
</script>


