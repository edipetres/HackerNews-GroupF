import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import config from './config'

Vue.config.productionTip = false
const apiUrl = process.env.NODE_ENV === 'production' ? config.apiUrl.prod : config.apiUrl.dev
Vue.prototype.$http = Axios.create({baseURL: apiUrl});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
