import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './pages/Home'
import Cart from './pages/Cart'
import User from './pages/User'
import Order from './pages/Order'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                header: {show: true, back: false, text: '商城首页'},
                navbar: {show: true, item: 'home'},
            },
        }, {
            name: 'Order',
            path: '/order',
            component: Order,
            meta: {
                header: {show: true, back: true, text: '我的订单'},
                navbar: {show: true, item: 'order'},
            },
        }, {
            name: 'Cart',
            path: '/cart',
            component: Cart,
            meta: {
                header: {show: true, back: true, text: '购物车'},
                navbar: {show: true, item: 'cart'},
            },
        }, {
            name: 'User',
            path: '/user',
            component: User,
            meta: {
                header: {show: true, back: true, text: '会员中心'},
                navbar: {show: true, item: 'user'},
            },
        }
    ]
})
