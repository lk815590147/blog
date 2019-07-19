<template>
  <div>
    <input type="button" value="点我" @click="flag=!flag" />
    <transition>
      <h1 v-if="flag">哈哈哈，你好啊！！！</h1>
    </transition>
  </div>
</template>

<style lang="less" scoped>

.v-enter,
.-v-leave-to {
  /* 透明度 */
  opacity: 0;
  /* 代表它起初的位置在正x轴的100px */
  transform: translateX(100px);
}

.v-enter-active,
.-v-leave-active {
  opacity: 1;
  transition: all 1s ease;
}

</style>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {}
};
</script>


