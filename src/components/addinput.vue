<template>
  <div>
    <el-button @click="add">添加</el-button>
    <el-table :data="data">
      <el-table-column  label="名称" >
        <template slot-scope="scope">
          <el-input v-model="data[scope.$index].name"></el-input>
        </template>
      </el-table-column>
      <el-table-column  label="年龄">
        <template slot-scope="scope">
          <el-input v-model="data[scope.$index].age"></el-input>
        </template>
      </el-table-column>
      <el-table-column  label="操作">
        <template slot-scope="scope">
          <el-button @click="deleteRow(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p>{{ num }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: [],
      num: "1",
      name:''
    };
  },
  methods: {
    add() {
      this.data.push({});
      this.num++;
    },
    deleteRow(index) {
      this.data.splice(index, 1);
    }
  },
  watch:{
    name: function(newVal, oldVal) {
    //   this.$emit("date", this.date);
    console.log(this.name);
    }
  }
};
</script>

