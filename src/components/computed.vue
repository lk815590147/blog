<template>
  <div>
    <!-- <input type="button" value="点击" @click="change" />
    <div>fullName:{{ fullName }}</div>-->
    <!-- {{ reversedText }} -->
    <input type="text" v-model="firstName" />
    姓名：{{ fullName }}
  </div>
</template>


<script>
export default {
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      text: "123,456"
    };
  },
  computed: {
    // fullName: {
    //   // getter 用于读取
    //   get: function() {
    //     return this.firstName + "" + this.lastName;
    //   },
    //   // setter 写入时触发
    //   set: function(newValue) {
    //     var names = newValue.split(" ");
    //     this.firstName = names[0];
    //     this.lastName = names[names.length - 1];
    //   }
    // }
    fullName: function() {
      return this.firstName + "" + this.lastName;
    }
  }
  //   什么时候使用计算属性computed，当属性有依赖项时要使用计算属性，当一个依赖项发生改变时，总体也会发生改变
  // computed: {
  //   fullName: function() {
  //     return this.firstName + "" + this.lastName;
  //   },
  //   reversedText: function() {
  //  reverse() 颠倒数组的顺序
  //     return this.text
  //       .split(",")
  //       .reverse()
  //       .join(",");
  //   }
  // },
  // methods: {
  //   change() {
  //     this.firstName = "foo";
  //     this.lastName = "bar";
  //   }
  // }
};
</script>


<style lang="less" scoped>
</style>

