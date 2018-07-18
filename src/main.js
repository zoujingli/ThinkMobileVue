import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import 'muse-ui/lib/styles/base.less'
import '../static/icons/font.css'

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

// 路由前置操作
router.beforeEach((to, from, next) => {
    // 同步路由参数控制导航条及工具栏
    store.commit('setHeader', to.meta.header)
    store.commit('setNavbar', to.meta.navbar)
    next();
})

// 实例Vue程序
new Vue({store, router, el: '#app', components: {App}, template: '<App/>'})
