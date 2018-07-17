import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import 'muse-ui/lib/styles/base.less'
import 'muse-ui/lib/styles/theme.less'

import {
    Icon,
    Card,
    AppBar,
    Avatar,
    Button,
    BottomNav
} from 'muse-ui'

Vue.use(Icon)
Vue.use(Card)
Vue.use(Vuex)
Vue.use(AppBar)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(BottomNav)

router.beforeEach((to, from, next) => {
    // 同步路由参数控制导航条及工具栏
    store.commit('setHeader', to.meta.header)
    store.commit('setNavbar', to.meta.navbar)
    next();
})

new Vue({store, router, el: '#app', components: {App}, template: '<App/>'})
