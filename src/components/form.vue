<template>
  <div :class="{'container':flag}">
    <!-- <input type="text" placeholder="输入...." @input="handleInput" /> -->
    <input type="text" placeholder="请输入..." v-model="message" v-focus />
    <!-- <textarea name id cols="30" rows="10" v-model.trim="message" ></textarea>
    <p>输入的内容是:{{ message }}</p>-->
    <!-- <slot>
        <p>如果父组件没有插入内容，我将作为默认的出现</p>
    </slot>-->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>

  <!-- .lazy	lazy 修饰符修改 input 触发为 change 触发 -->
  <!-- .number number 修饰符可以将返回结果自动转化为 Number 类型，否则就是 String 类型 -->
  <!-- .trim  trim 过滤首尾空格符-->
  
</template>


<script>
export default {
  data() {
    return {
      message: "哈哈哈",
      flag: true
    };
  },
  methods: {
    handleInput(e) {
      this.message = e.target.value;
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  margin: 20px;
}
</style>


