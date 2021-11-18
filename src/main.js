import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);

Vue.use(VueI18n)
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
