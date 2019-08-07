<template>
  <div>
    <div>
      <input type="text" v-model="veriCode" />
      <input type="button" value="Send" @click="login" />
      <p>{{ code }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      code: "",
      veriCode: ""
    };
  },
  created() {
    this.getRandom();
  },
  methods: {
    getRandom() {
      //新知识当num取" "时，后面的 num+=....就可以不用使用得到循环加起来的数字，得到的是一个一个数字拼接起来的
      //   当你给num赋值或者null时，num+=....得到的是循环加起来的数据
      var num = "";
      var num2 = 0;
      for (var i = 0; i < 4; i++) {
        num += Math.floor(Math.random() * 10);
      }
      for (var j = 0; j < 4; j++) {
        //   num2=j
        //   num2+=num2
        num2 += j;
        // num2 = num2 + j;
      }
      console.log(num2);
      this.code = num;
      console.log(this.code);
    },
    login() {
      if (this.code == this.veriCode) {
        // vue-router路由跳转
        this.$router.push("tran");
      } else {
        alert("输入错误");
      }
    }
  }
};
</script>


<style lang="less" scoped>
p {
  color: red;
}
</style>


