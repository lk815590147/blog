<template >
  <div>
    <!-- <p v-if="ok">哈哈哈</p>
    <p v-else>嘻嘻嘻</p>-->
    <!-- <input v-model="msg" lazy>
    <br>
    {{ msg }}-->
    <ul>
      <li v-for="(item,index) in items"  :key="index">
          {{ item.msg }}--{{ item.parentMessage }}--{{ index }}
      </li>
    </ul>
  </div>
</template>



<style lang="less" scoped>
</style>


<script>
export default {
  data() {
    return {
      ok: false,
      msg: "内容是在change事件后才改变的！！！",
      items: [
        { parentMessage: "滴滴" },
        { msg: "滴滴顺风车" },
        { msg: "滴滴专车" }
      ]
    };
  }
};
</script>
