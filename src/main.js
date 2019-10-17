/*
* 入口 JS
* */
import Vue from 'vue'
import App from './App'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'

// 注册成标签（全局）
Vue.component(Button.name, Button)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
