<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div v-for="item in data" :key="item.index">{{item.name}}</div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      count: 0,
      data: [],
      busy: false
    };
  },
  methods: {
    loadMore: function() {
      this.busy = true;
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: this.count++ });
        }
        console.log(this.data);
        this.busy = false;
      }, 2000);
    },
    getdata() {
      var targetNode = document.querySelector(".f-w6"); //而不是用$(".f-w6")等
      var config = {
        characterData: true
      };
      var callback = function(mutationsList) {
        for (var mutation of mutationsList) {
          if (mutation.type == "characterData") {
            console.log("33333");
          }
        }
      };
      var observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
  }
};
</script>


<style lang="less" scoped>
</style>