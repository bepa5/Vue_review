import Vue from 'vue'
import App from './App.vue'
//引入状态管理库
import store from './store'
//关闭生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
