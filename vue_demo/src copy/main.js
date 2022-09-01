import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'
//关闭生产提示
Vue.config.productionTip = false

Vue.use(plugins)
new Vue({
  render: h => h(App),
}).$mount('#app')
