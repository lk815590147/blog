// import VueRouter from 'vue-router'

// import Home from '../components/Home.vue'


// var router = new VueRouter({
//     routes: [
//         // { path: '/', redirect: '/home' },
//         { path:'/home' ,component: Home}
//     ]
// })

// export default router

import VueRouter from 'vue-router'

import Home  from '../components/Home.vue'
import Route from '../components/Route.vue'
import Transform from '../components/Transform.vue'


var router=new VueRouter({
    routes:[
        { path:'/home',component:Home },
        { path:'/route',
          name:'router',
          component: Route },
        { path: '/tran',component:Transform},
        {
          path:'/animate',
          name:'/animate',
          component:resolve=>require(['../components/animate.vue'],resolve)
        }
    ]
})

export default router;