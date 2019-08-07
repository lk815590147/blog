<template>
  <div>
    <!-- <v-downloadmenu></v-downloadmenu> -->
    <!-- <v-math></v-math> -->
    <!-- <v-addinput></v-addinput> -->
    <v-addinput2></v-addinput2>
    <!-- <router-view></router-view> -->
    <!-- <v-computed2></v-computed2> -->
    <!-- <v-form>
      <p>哈哈哈</p>
      <h2 slot="header">标题</h2>
      <h1 slot="footer">底部</h1>
    </v-form> -->
    <!-- <v-transition></v-transition> -->
    <!-- <v-filters></v-filters> -->
    <!-- <v-style></v-style> -->
    <!-- <tablehead></tablehead> -->
    <!-- <v-search></v-search> -->
    <!-- <v-animate></v-animate> -->
    <!-- <v-if></v-if> -->
    <!-- <v-index></v-index> -->
    <!-- <v-animate2></v-animate2> -->
    <!-- <animate></animate> -->
    <!-- <v-Menu></v-Menu> -->
    <!-- <v-stop></v-stop> -->
    <!-- <router-link to="/home">点我</router-link>  -->
    <!-- <router-view></router-view>  -->
    <!-- <v-home></v-home> -->
    <!-- <router-link :to="{name:'router'}">
      <el-button type="primary">点我</el-button>
    </router-link>-->
    <!-- <router-view></router-view> -->
    <!-- <v-button></v-button> -->
    <!-- <v-button2></v-button2>  -->
    <!-- <v-content></v-content> -->
    <!-- <v-img></v-img> -->
    <!-- <v-content2></v-content2>  -->
    <!-- <v-content3></v-content3> -->
    <!-- <v-element></v-element> -->
    <!-- <v-select2></v-select2> -->
    <!-- <zheng></zheng> -->
    <!-- <v-select3></v-select3> -->
    <!-- <v-select></v-select> -->
    <!-- <v-computed></v-computed> -->
    <!-- <v-watch></v-watch> -->
    <!-- <counter></counter>
    <hr />
    <amount></amount>-->
    <!-- <div class="reply">
      主编已回复:
      <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
        <span class="radio" :class="{'on':item.isChecked}"></span>
        <input
          v-model="radio"
          :value="item.value"
          class="input-radio"
          :checked="item.isChecked"
          @click="check(index)"
          type="radio"
        />
        {{item.label}}
      </div>
    </div>-->
    <!-- <v-la></v-la> -->
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Layout from "./components/Layout.vue";
import button from "./components/button.vue";
import img from "./components/img.vue";
import content from "./components/content.vue";
import button2 from "./components/button2.vue";
import content2 from "./components/content2.vue";
import element from "./components/element.vue";
import content3 from "./components/content3.vue";
import select2 from "./components/select2.vue";
import select3 from "./components/select3.vue";
import computed from "./components/computed.vue";
import counter from "./components/counter.vue";
import amount from "./components/amount.vue";
import watch from "./components/watch.vue";
import zheng from "./components/zheng.vue";
import la from "./components/la.vue";
import Menu from "./components/Menu.vue";
import stop from "./components/stop.vue";
import tablehead from "./components/TableHead.vue";
// import animate from "./components/animate.vue";
export default {
  name: "App",
  data() {
    return {
      radio: "1",
      radios: [
        {
          label: "是",
          value: "1",
          isChecked: true
        },
        {
          label: "否",
          value: "2",
          isChecked: false
        }
      ]
    };
  },
  methods: {},
  components: {
    "v-home": Home,
    "v-layout": Layout,
    "v-button": button,
    "v-img": img,
    "v-content": content,
    "v-button2": button2,
    "v-content2": content2,
    "v-element": element,
    "v-content3": content3,
    "v-select3": select3,
    "v-select2": select2,
    "v-computed": computed,
    "v-watch": watch,
    "v-la": la,
    "v-Menu": Menu,
    "v-stop": stop,
    // 懒加载
    VAnimate: () => import("./components/animate.vue"),
    "v-index": () => import("./components/index.vue"),
    VAnimate2: () => import("./components/animate2.vue"),
    zheng,
    counter,
    amount,
    VIf: () => import("./components/if.vue"),
    VSearch: () => import("./components/search.vue"),
    VStyle: () => import("./components/style.vue"),
    tablehead,
    VFilters: () => import("./components/filters.vue"),
    VTransition: () => import("./components/transition.vue"),
    VComputed2: () => import("./components/computed2.vue"),
    VForm: () => import("./components/form.vue"),
    VDownloadmenu:()=>import("./components/downloadmenu.vue"),
    VMath:()=>import("./components/math.vue"),
    VAddinput:()=>import("./components/addinput.vue"),
    VAddinput2:()=>import("./components/addinput2.vue")
  },
  methods: {
    check(index) {
      // 先取消所有选中项
      this.radios.forEach(item => {
        item.isChecked = false;
      });
      //再设置当前点击项选中
      this.radio = this.radios[index].value;
      // 设置值，以供传递
      this.radios[index].isChecked = true;
      console.log(this.radio);
    }
  }
};
</script>

<style lang="less" scoped>
.radio-box {
  display: inline-block;
  position: relative;
  height: 25px;
  line-height: 25px;
  margin-right: 5px;
}
.radio {
  display: inline-block;
  width: 30px;
  height: 28px;
  vertical-align: middle;
  cursor: pointer;
  background-color: #fff;
  background: url("./img/Ul-kit.png");
  background-repeat: no-repeat;
  background-position: 0 0;
}
.input-radio {
  display: inline-block;
  position: absolute;
  opacity: 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  left: 0px;
  outline: none;
  -webkit-appearance: none;
}
.on {
  background: url("./img/Ul-kit2.png");
  background-size: 100%;
}
</style>


