<template>
  <div>
    姓名：
    <input type="text" class="form-control" v-model="keyword" />
    手机号：
    <input type="text" class="form-control" v-model="keyword2" />
    <input type="button" @click="search(keyword,keyword2)" value="搜索" />
    <ul v-for="item in list" :key="item.id">
      <li>{{ item.name }}--{{ item.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      keyword2: "",
      newlist2: "",
      list: [
        {
          id: 1,
          name: "刘凯",
          phone: "1221121211"
        },
        {
          id: 2,
          name: "凯凯",
          phone: "1221121212"
        },
        {
          id: 3,
          name: "刘凯",
          phone: "1221121213"
        },
        {
          id: 4,
          name: "凯凯",
          phone: "1221121214"
        }
      ]
    };
  },
  created() {
    this.newlist2 = this.list;
  },
  methods: {
    search(keyword, keyword2) {
      var newlist = [];
      var newlist3 = [];
      if (keyword == "" && keyword2 == "") {
        this.list = this.newlist2;
      } else {
        this.list.forEach(item => {
          if (item.name.indexOf(keyword) != -1) {
            newlist.push(item);
            // console.log(newlist);
            this.list = newlist;
          }
        });
        newlist.forEach(item => {
          if (item.phone.indexOf(keyword2) != -1) {
            newlist3.push(item);
            console.log(newlist3);
            this.list = newlist3;
          }
        });
      }
      return this.list;
    }
  }
};
// 1.为什么search（keyword）可以一直的执行，因为它一直挂载在v-for上，所以可以一直执行
// 2.search（keyword）是重新建立一个数组，根据keyword来判断
// 3.我们去看看class和style是如何绑定的
</script>



<style lang="less" scoped>
</style>


