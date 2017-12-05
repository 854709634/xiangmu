// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//模拟接口数据
import data from './config/mock';

//引入饿了么pc端组件库
import ElementUI from 'element-ui'
import './element-variables.scss'
Vue.use(ElementUI)

//引入字体图标
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
