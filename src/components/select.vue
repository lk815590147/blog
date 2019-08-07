<template>
  <div class="container">
    <div class="container2">
      <!-- <div style="float:left;width:500px;">
        <select
          name
          id
          :class="['sel',{'active':flag}]"
          style="font-size:15px; overflow-y:auto;z-index:111"
          @click="flag=!flag"
        >
          <option value="1">春意绵绵</option>
          <option value="2" selected>夏日炎炎</option>
          <option value="3">秋日凉凉</option>
          <option value="4">冬天冷冷</option>
          <option value="4">冬天冷冷</option>
          <option value="4">冬天冷冷</option>
          <option value="4">冬天冷冷</option>
          <option value="4">冬天冷冷</option>
          <option value="4">冬天冷冷</option>
        </select>
        <select
          name
          id
          :class="['sel',{'active':flag}]"
          style="font-size:15px;"
          @click="flag=!flag"
        >
          <option value="1">春意绵绵</option>
          <option value="2">夏日炎炎</option>
          <option value="3">秋日凉凉</option>
          <option value="4">冬天冷冷</option>
        </select>
        <select
          name
          id
          :class="['sel',{'active':flag}]"
          style="font-size:15px;"
          @click="flag=!flag"
        >
          <option value="1">春意绵绵</option>
          <option value="2">夏日炎炎</option>
          <option value="3">秋日凉凉</option>
          <option value="4">冬天冷冷</option>
        </select>
        <select
          name
          id
          :class="['sel',{'active':flag}]"
          style="font-size:15px;"
          @click="flag=!flag"
        >
          <option value="1">春意绵绵</option>
          <option value="2">夏日炎炎</option>
          <option value="3">秋日凉凉</option>
          <option value="4">冬天冷冷</option>
        </select>
        <select
          name
          id
          :class="['sel',{'active':flag}]"
          style="font-size:15px;"
          @click="flag=!flag"
        >
          <option value="1">春意绵绵</option>
          <option value="2">夏日炎炎</option>
          <option value="3">秋日凉凉</option>
          <option value="4">冬天冷冷</option>
        </select>
      </div> -->
      <div>
      </div>
      <div class="container3">
        <p>哈哈哈</p>
      </div>
    </div>
  </div>
</template>



<style lang="less" scoped>
.container {
  background-color: #ccc;
  display: flex;
  justify-content: center;
  height: 500px;
  .container2 {
    background: #fff;
    width: 1000px;
    height: 300px;
    .sel {
      margin: 20px 20px;
      width: 200px;
      height: 50px;
      border: 1px solid red;
      outline: none;
      color: red;
    }
    .active {
      box-shadow: 1px 1px 10px yellow;
    }
    .container3 {
      float: right;
      background: red;
      width: 300px;
      height: 200px;
    }
  }
}
</style>


<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    change() {}
  }
};
</script>


