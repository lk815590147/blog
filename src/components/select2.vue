<template>
  <div>
    <span>所在区域</span>
    <select name v-model="country" @click="getchange">
      <option :value="item" v-for="(item,index) in area" :key="index">{{item.country}}</option>
    </select>
    <select name v-model="city">
      <option :value="item" v-for="(item,index) in country.city" :key="index">{{item}}</option>
    </select>
  </div>
</template>


<style lang="less" scoped>
.selection-component {
  width: 173px;
  float: right;
  .selection-show {
    width: 160px;
    position: relative;
    .arrow {
      position: absolute;
      width: 10px;
      right: 0;
      top: 0;
    }
  }
  .selection-list {
    border: 1px solid #ccc;
    width: 173px;
    ul {
      padding: 0;
      margin: 0;
      height: 200px;
      overflow: auto;
      li {
        list-style: none;
        &:hover {
          background: #ccc;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      country: "",
      city: "",
      area: [
        {
          country: "美国",
          city: [
            "纽约",
            "洛杉矶",
            "旧金山",
            "西雅图",
            "波士顿",
            "休斯顿",
            "圣地亚哥",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它",
            "芝加哥",
            "其它"
          ]
        },
        {
          country: "加拿大",
          city: ["温哥华", "多伦多", "蒙特利尔", "其它"]
        },
        {
          country: "澳大利亚",
          city: ["悉尼", "墨尔本", "其它"]
        },
        {
          country: "新加坡",
          city: ["新加坡"]
        },
        {
          country: "中国",
          city: ["北京市"]
        }
      ]
    };
  },
  created() {
    this.country = this.area[0];
    this.city = this.country.city[0];
  },
  methods: {
    getchange() {
      this.city = this.country.city[0];
    }
  }
};
</script>

