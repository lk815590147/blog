
import Vue from 'vue';

import app from './APP.vue';

// 导入 axios文件
import Axios from 'axios'
// 给Vue挂载一个属性
Vue.prototype.$ajax = Axios

Axios.defaults.baseURL = 'http://honganxin.com/'

import Vuerouter from 'vue-router'

Vue.use(Vuerouter);

import router from './router/router.js'


import preview from 'vue-photo-preview'

import 'vue-photo-preview/dist/skin.css'

Vue.use(preview);

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import Vuex from 'vuex';

Vue.use(Vuex);

import vSelect from 'vue-select';

import 'vue-select/dist/vue-select.css';

import animated from 'animate.css'

Vue.use(animated);

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

// import VueDropdown from 'vue-dynamic-dropdown'

// Vue.component('vue-dropdown', VueDropdown);

Vue.component('v-select', vSelect);

// import VueDropdown from 'vue-dynamic-dropdown'

// Vue.component('vue-dropdown', VueDropdown);



var store = new Vuex.Store({
  state: {
    count: 0,
    date: ''
  },
  mutations: {
    increment(state) {
      state.count++
    },
    subtract(state, obj) {
      // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；
      console.log(obj)
      state.count -= (obj.c + obj.d)
    }
  },
  getters: {
    // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，请 去找 mutations
    optCount: function (state) {
      return '当前最新的count值是：' + state.count
    }
    // 经过咱们回顾对比，发现 getters 中的方法， 和组件中的过滤器比较类似，因为 过滤器和 getters 都没有修改原数据， 都是把原数据做了一层包装，提供给了 调用者；
    // 其次， getters 也和 computed 比较像， 只要 state 中的数据发生变化了，那么，如果 getters 正好也引用了这个数据，那么 就会立即触发 getters 的重新求值；
  }
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router: router,
  store
})
