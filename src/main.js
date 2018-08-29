import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import './icons' // svg icons
import i18n from './lang' // Internationalization
import router from './router'
import store from './store'

import './errorLog' // error log
import './permission' // permission control
import './mock' // simulation data

Vue.use(Element)

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
