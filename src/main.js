import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import './icons' // svg icons
import i18n from './lang' // Internationalization
import router from './router'
import store from './store'

Vue.use(Element)

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
