import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext)

// import all svg
const req = require.context('./svg', true, /\.svg$/)
requireAll(req)

// register globally
Vue.component('svg-icon', SvgIcon)
