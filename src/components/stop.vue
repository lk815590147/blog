<template>
  <div>
    <h1>Vue中事件的修饰符</h1>
    <div>
      <a href="https://www.baidu.com/" @click.stop="aEven">百度链接</a>
      <a href="https://www.baidu.com/" @click.stop.prevent="aEven">百度链接</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    divEven() {
      alert("我是div的事件");
    },
    aEven() {
      alert("我是a链接事件");
    }
  }
};
</script>


<style scoped lang="less">
</style>


