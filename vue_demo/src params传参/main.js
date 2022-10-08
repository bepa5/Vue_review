import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
//关闭生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
