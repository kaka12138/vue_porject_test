import Vue from 'vue'
import App from './App.vue'

// 使用axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);

// 全部导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入mui
import './lib/mui/css/mui.css'

Vue.config.productionTip = false

// 引入mock
require('./mock.js')

new Vue({
  render: h => h(App),
}).$mount('#app')
