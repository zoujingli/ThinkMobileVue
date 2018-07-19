import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import './assets/icons/font.css'
import 'muse-ui/lib/styles/base.less'

import {
    Icon,
    Card,
    List,
    Paper,
    AppBar,
    Avatar,
    Button,
    Divider,
    LoadMore,
    BottomNav
} from 'muse-ui'

Vue.use(Icon)
Vue.use(Divider)
Vue.use(Card)
Vue.use(Paper)
Vue.use(List)
Vue.use(Vuex)
Vue.use(AppBar)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(LoadMore)
Vue.use(BottomNav)

import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://api.data.cuci.cc';
Vue.prototype.axios = axios;

// 路由前置操作
router.beforeEach((to, from, next) => {
    // 同步路由参数控制导航条及工具栏
    console.log(to.meta);
    store.commit('setHeader', to.meta.header)
    store.commit('setNavbar', to.meta.navbar)
    next();
})

// 实例Vue程序
new Vue({store, router, el: '#app', components: {App}, template: '<App/>'})
