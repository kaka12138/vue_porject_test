import Vue from 'vue'
import App from './App.vue'
// 使用axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

// 引入mock
require('./mock.js')

new Vue({
  render: h => h(App),
}).$mount('#app')
