<template>
  <div>
    <button @click="show = !show">Toggle show</button>
    <transition name="slide-fade">
   <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
  </div>
</template>

<style lang="less" scoped>
// // 出现 没到有
// .slide-fade-enter-active {
//   transition: all .3s ease;
// }
// // 离开，有到没
// .slide-fade-leave-active {
//   // cubic-bezier是控制变化的速度曲线。
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slide-fade-enter, .slide-fade-leave-to{
//   transform: translateX(10px);
//   opacity: 0;
// }
.slide-fade-enter-active {
  animation: fade 0.5s;
}
.slide-fade-leave-active {
  animation: fade 0.5s;
}
@keyframes fade {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>


<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>


