<template>
  <div>
    <!-- <input type="button" value="按我" @mouseenter="flag=!flag" @mouseleave="flag=!flag"/> -->
    <input type="button" @click="flag=!flag" value="按我" />
    <transition
      enter-active-class="zoomIn"
      leave-active-class="rotateOutDownLeft"
      :duration="{ enter:1000,leave:1000 }"
    >
      <h3 v-show="flag" class="animated">这是一个酷酷的我</h3>
    </transition>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>
export default {
  name: "v-animate",
  data() {
    return {
      flag: false
    };
  }
};
</script>


