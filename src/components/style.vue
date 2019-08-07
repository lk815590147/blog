<template>
  <div>
    <div class="container">
      <input type="button" value="toggle" @click="change" />
      <div :class="{ 'main':flag, 'main2': flag2 }" class="text">
        <p>哈哈哈</p>
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.container {
  width: 200px;
  height: 200px;
  // background: red;
  margin: 20px auto;
  text {
    p {
      text-align: center;
      color: aqua;
    }
  }
  .main {
    width: 100px;
    height: 100px;
    background: yellow;
  }
  .main2 {
    width: 100px;
    height: 100px;
    background: blue;
  }
}
</style>


<script>
export default {
  data() {
    return {
      flag: true,
      flag2: false
    };
  },
  methods: {
    change() {
      this.flag = !this.flag;
      this.flag2 = !this.flag2;
    }
  }
};
</script>


