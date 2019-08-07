<template>
  <div>
    <div class="btn">
      <div
        class="btn2"
        v-for="(item,index) in tabs"
        :key="index"
        :data-id="item.id"
        :data-num="index"
        @click="onTabs($event)"
      >{{ item.name }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.btn {
  display: flex;    
  margin: 20px auto;
  justify-content: center;
  .btn2 {
    width: 100px;
    height: 50px;
    border: 1px solid red;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
}
</style>

<script>
export default {
  data() {
    return {
      tabs: [
        { id: 1, name: "自我介绍" },
        { id: 2, name: "自我介绍1" },
        { id: 3, name: "自我介绍2" }
      ]
    };
  },
  created(){
   
  },
  methods:{
    onTabs(e){
      this.activeId = e.target.dataset.id;
      console.log(this.activeId);
      this.ins = e.target.dataset.num;
    }
  }
};
</script>


