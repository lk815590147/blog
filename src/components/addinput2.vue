<template>
  <div>
    <input type="button" value="添加" @click="add" />
    <input type="button" value="提交" @click="get" />
    <table v-for="(item,index) in data" :key="index">
      <p>{{ index+1 }}</p>
      <template>
        <input type="text" v-model="item.name" placeholder="请输入你的名字" />
      </template>
      <template>
        <input type="text" v-model="item.age" />
      </template>
      <input type="button" value="删除" @click="delet(index)" />
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{ name: "", age: "" }],
      data2:{
          name:'a',
          age:'12'
      }
    };
  },
  methods: {
    add() {
      this.data.push({});
      this.num++;
      console.log(this.num);
    },
    get() {
      console.log(this.data);
      console.log(this.data2.name)
    },
    delet(index) {
      this.data.splice(index, 1);
    }
  }
};
</script>

