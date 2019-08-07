<template>
  <div>
    <el-row>
      <el-button type="primary">主要按钮</el-button>
      <el-button icon="el-icon-search" circle></el-button>
    </el-row>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-button @click="show = !show">Click Me</el-button>
    <transition name="el-fade-in-linear">
      <div v-show="show" class="transition-box">.el-fade-in-linear</div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.transition-box{
  width: 200px;
  height: 100px;
  border-radius: 1px solid blue;
  background-color: aqua;
  text-align: center;
  line-height: 100px;
}
</style>


<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>


