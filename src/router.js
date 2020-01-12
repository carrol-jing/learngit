import VueRouter from 'vue-router'

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/member',component:Member},
    {path:'/shopcar',component:Shopcar},
    {path:'/search',component:Search},
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router