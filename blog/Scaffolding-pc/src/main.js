import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store/store.js'
import axios from 'axios'
import VuewLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
import Moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
import './style/style.css'  // 覆盖组件样式
// import './style/gloab.less'
import Mock from './mock/mock.js'
axios.defaults.baseURL = 'http://mockjs.com/api' // 数据接口
Vue.prototype.$http = axios
Vue.prototype.moment = Moment
// Vue.use(axios)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VuewLazyLoad)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes,
  mode: 'history', // history , hash , abstract
  base: '/vue/',
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

// 路由全局守卫
router.beforeEach((to, from, next) => {
  next()
})

// 路由后置钩子
router.afterEach((to, from) => {
})

// 全局自定义指令
Vue.directive('along', {
  bind (el, binding, vnode) {
    if (binding.value === 'red') {
      el.style.color = 'red'
    } else if (binding.value === 'blue') {
      el.style.color = 'blue'
    }

    if (binding.arg === 'column') {
      el.style.background = 'rgb(0,0,0,.2)'
    }
  }
})

// 全局自定义过滤器
Vue.filter('size', (value) => {
  let a = value.slice(0, 4)
  return a
})

Vue.filter('Intercept', (value) => {
  let a = value.slice(0,180)+ '...';
  return a;
})



// 全局注册组件
Vue.component('my-component', {
  template: '<div>along</div>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
