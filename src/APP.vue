<template>
  <div>
    <!-- <router-link to="/home">点我</router-link>  -->
    <!-- <router-view></router-view>  -->
    <v-home></v-home>
    <router-link :to="{name:'router'}">点我</router-link>
    <router-view></router-view>
    <v-button></v-button>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Layout from "./components/Layout.vue";
import button from "./components/button.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "v-home": Home,
    "v-layout": Layout,
    "v-button": button
  }
};
</script>

<style lang="less" scoped>
</style>


