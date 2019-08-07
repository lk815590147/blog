<template>
  <div class="main" v-clickoutside="handleClose">
    <button @click="show=!show">点击显示下拉菜单</button>
    <transition
      enter-active-class="fadeInDown"
      leave-active-class="rotateOut"
      :duration="{ enter:1000,leave:1000 }"
    >
      <!-- 动画 animated 一定要取 -->
      <div class="dropdown animated" v-show="show">
        <!-- <p>下拉框的内容，点击外面区域可以关闭</p> -->
        <ul>
          <li>哈哈哈</li>
          <li>嘻嘻嘻</li>
        </ul>
      </div>
    </transition>
    <div class="arrow" v-show="show"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleClose() {
      this.show = false;
    }
  },
  directives: {
    clickoutside: {
      bind: function(el, binding, vnode) {
        function documentHandler(e) {
          // contains 方法是用来判断元素 是否包含了元素 ，包含返回 true ，不包含返回也lse.
          if (el.contains(e.target)) {
            return false;
          }
          if (binding.expression) {
            binding.value(e);
          }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener("click", documentHandler);
      },
      unbind: function(el, binding) {
        document.removeEventListener("click", el.__vueClickOutside__);
        delete el.__vueClickOutside__;
      }
    }
  }
  // bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  // inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  // update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
  // componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  // unbind：只调用一次，指令与元素解绑时调用。
};
</script>


<style lang="less" scoped>
.main {
  width: 125px;
  margin: 20px auto;
  position: relative;
  button {
    display: block;
    width: 100%;
    color: #fff;
    background-color: #39f;
    border: 0;
    padding: 6px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    position: relative;
    &:active {
      top: 1px;
      left: 1px;
    }
  }
  .dropdown {
    width: 100%;
    height: 150px;
    margin: 5px 0;
    font-size: 12px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 lpx 6px rgba(0, 0, 0, 0.2);
    ul {
      > li {
        display: inline-block;
        // width: 100%;
        padding: 6px;
        cursor: pointer;
        // border-top:1px solid #ccc;
        border-bottom: 1px solid #ccc;
        &:hover {
          background: blueviolet;
        }
      }
    }
  }
  .arrow {
    position: absolute;
    top:22px;
    width: 0px;
    height: 0px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    border-radius: 0;
  }
}
</style>


