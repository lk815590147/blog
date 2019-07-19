
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




var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router:router
})