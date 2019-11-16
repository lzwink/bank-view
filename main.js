import Vue from 'vue'
import App from './App'

import store from './store'
import screenTextScroll from './components/screenTextScroll.vue'

Vue.component('textscroll',screenTextScroll)
Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
