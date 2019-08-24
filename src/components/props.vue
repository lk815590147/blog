<template>
  <div>
    <div v-for="(item,index) in List" :key="index">{{ item.name }}</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  props: {
    // 验证从父组件传过来的值是不是数组
    List: Array
  },
  updated() {
    this.data = this.List;
    console.log(this.data);
  },
  created() {
    console.log(this.List);
    console.log(this.data);
  }
};
</script>


<style lang="less" scoped>
</style>

