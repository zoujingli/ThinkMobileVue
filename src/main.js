import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import 'muse-ui/lib/styles/base.less'
import 'muse-ui/lib/styles/theme.less'

import {Icon, Card, AppBar, Avatar, Button, BottomNav} from 'muse-ui'

Vue.use(Icon)
Vue.use(Card)
Vue.use(Vuex)
Vue.use(AppBar)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(BottomNav)

new Vue({store, router, el: '#app', components: {App}, template: '<App/>'})
