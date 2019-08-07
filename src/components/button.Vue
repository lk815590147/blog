<template>
  <div>
    <div class="content">
      <div class="content2">
        <span class="colfont">艺术家类别</span>
        <div>
          <button
            v-for="(item,index) in categoryList"
            :key="index"
            type="text"
            :class="{'active': ind == index }"
            @mouseover="categoryStyle(index,item.id)"
          >{{item}}</button>
        </div>
      </div>
      <div>
        
        <button
          v-for="(item,index) in categoryList2"
          :key="index"
          type="text"
          :class="{'active': ind2 == index}"
          @mouseover="categoryStyle2(index,item.id)"
          v-show="flag=flag"
        >{{item}}</button>
      </div>
    </div>
    <div v-for="(item,index) in list" :key="index">
      <div class="text" v-if="index==ind3" v-cloak v-show="flag=flag">
        <p v-html="item.name"></p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.text {
  display: flex;
  justify-content: center;
  margin: 100px;
}
.content2 {
  display: flex;
}
.content {
  width: 400px;
  margin: 20px auto;
  text-align: center;
  button {
    background-color: transparent;
    border-style: none;
    cursor: pointer;
    outline: none;
  }
  .active {
    background: rgba(230, 0, 18, 1);
  }
}
</style>

<script>
export default {
  data() {
    return {
      categoryList: ["名家", "媒体", "自媒体", "机构", "场务", "政务"],
      categoryList2: ["你好", "媒体", "酷酷", "机构", "场务", "政务"],
      list: [
        { id: 1, name: "名字长点很拉风" },
        { id: 2, name: "夏天的绿色雪碧" },
        { id: 3, name: "夏天的绿色雪碧2" },
        { id: 4, name: "夏天的绿色雪3" },
        { id: 5, name: "夏天的绿色雪碧4" }
      ],
      ind: "",
      ind2: "",
      ind3: "",
      flag: false
    };
  },
  methods: {
    categoryStyle(index, id) {
      this.ind = index;
      if (this.ind == 1) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    categoryStyle2(index, id) {
      this.ind2 = index;
      this.ind3 = index;
    }
  }
};
</script>


