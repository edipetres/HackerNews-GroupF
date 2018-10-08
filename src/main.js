import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import config from './config'

Vue.config.productionTip = false
Vue.prototype.$http = Axios.create({baseURL: process.env.NODE_ENV == 'development' ? config.apiUrl.dev : config.apiUrl.prod}); // using The Ternary Operator

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
