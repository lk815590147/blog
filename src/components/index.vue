<template>
  <div>
    <input type="button" value="按我" @click="flag=!flag" />
    <transition
      enter-active-class="fadeIn"
      leave-active-class="bounceOut"
      :duration="{ enter:1000,leave:1000 }"
    >
      <div v-show="flag" class="container">
        <div class="main">
          <h1>选择</h1>
          <p>X</p>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      flag: false
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  min-width: 100%;
  min-height: 936px;
  background: rgba(10, 52, 179, 0.2);
  z-index: 1;
  .main{
      display: flex;
      justify-content: space-between;
      width: 100%;
  }
}
</style>


