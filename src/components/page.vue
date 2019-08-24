<template >
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      layout="total, prev, pager, next, jumper"
      :total="total"
      :page-size="pagesize"
    ></el-pagination>
</template>


<script>
export default {
  data() {
    return {
      currentPage4: 1,
      page: "",
      pagesize: 5,
      total: 100
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val;
      console.log("当前页：" + this.page);
      // 将当前页数传入后台然后重新刷新页面就可以了
    }
  }
};
</script>


<style lang="less" >
</style>


