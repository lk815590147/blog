<template>
  <div>
    <div v-for="(item,index) in imgList" :key="index">
      <div>
<!--         <img
          :src="item.Img"
          :class="{'scale':isScale,'scale':ind==index}"
          @click="change(index)"
          style="width:200px;height:200px"
        /> -->
        <img :src="item.Img" alt="" style="width: 200px;height: 200px;" preview>
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ind: "",
      imgList: [
        {
          id: 1,
          Img: "./img/00.jpg"
        },
        { id: 2, Img: "./img/1.6.jpg" },
        { id: 3, Img: "./img/2.jpg" }
      ],
      isScale: false
    };
  },
  methods: {
    change(index) {
    //   this.isScale = !this.isScale;
      this.ind = index;
    }
  }
};
</script>

<style lang="less" scoped>
img {
  transform: scale(1);
  transition: all ease 0.2s;
}
.scale {
  transform: scale(0.8);
}
</style>


