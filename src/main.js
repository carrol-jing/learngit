import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://vue.studyit.io/'

// import moment from 'moment'
Vue.filter('dataFormat',function(datestr,pattern="YYYY-MM-DD hh-mm-ss"){
  return moment(datestr).format(pattern);
})
// function(datestr,pattern="YYYY-MM-DD hh-mm-ss"){
//   let dt=new Date(datestr);
//   let y=dt.getFullYear();
//   let m=(dt.getMonth()+1).toString().padStart(2,'0');
//   let d=dt.getDate().toString().padStart(2,'0');
  
//     let hh=dt.getHours().toString().padStart(2,'0');
//     let mm=dt.getMinutes().toString().padStart(2,'0');
//     let ss=dt.getSeconds().toString().padStart(2,'0');
//     return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  
// }

import app from './App.vue'

import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)


import router from './router.js'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import moment from 'moment'

var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
})