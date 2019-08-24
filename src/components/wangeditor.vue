<template>
  <div id="editor"></div>
</template>

<script>
import E from "wangeditor";
export default {
  data() {
    return {
      formArticle: {
        content: ""
      }
    };
  },
  mounted() {
    var editor = new E("#editor");
    editor.customConfig.uploadImgShowBase64 = true;
    editor.customConfig.onchange = html => {
      this.formArticle.content = html;
      console.log(this.formArticle.content);
    };
    editor.create();
  }
};
</script>   

<style lang="less" scoped>
</style>