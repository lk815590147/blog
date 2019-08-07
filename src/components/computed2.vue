<template>
  <div>
    <ul v-for="item in filterBooks" :key="item.id">
      <li>书名：{{ item.name }}</li>
      <li>作者：{{ item.author }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>
export default {
  data() {
    return {
      books: [
        {
          name: "《Vue.js实战》",
          author: "刘凯"
        },
        {
          name: "《JavaScript实战》",
          author: "凯凯"
        },
        {
          name: "《JavaScript实战》",
          author: "哈哈"
        }
      ]
    };
  },
  computed:{
      filterBooks:function(){
          return this.books.filter(function(book){
              return book.name.match(/JavaScript/);
          })
      }
  }
};
</script>


