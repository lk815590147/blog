<template>
  <div class="main left">
    <span>生日：</span>
    <v-date></v-date>
    <input type="button" value="提交" @click="send" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      date2: ""
    };
  },
  methods: {
    getdate(data) {
      this.date2 = data;
    },
    send() {
      // 这里可以使用状态管理
      console.log(this.$store.state.date);
      this.$store.state.date = "";
    }
  },
  components: {
    VDate: () => import("./data.vue")
  }
};
</script>


<style lang="less" scoped>
</style>

