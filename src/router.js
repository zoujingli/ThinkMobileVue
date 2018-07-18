import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './pages/Home'
import Order from './pages/Order'
import Cart from './pages/Cart'
import User from './pages/User'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            meta: {
                header: {show: true, back: false, text: 'ThinkMobileVue'},
                navbar: {show: true, item: 'home'},
            },
            component: Home
        }, {
            path: '/order',
            name: 'Order',
            meta: {
                header: {show: true, back: true, text: 'ThinkMobileVue'},
                navbar: {show: true, item: 'home'},
            },
            component: Order
        }, {
            path: '/cart',
            name: 'Cart',
            meta: {
                header: {show: true, back: true, text: 'ThinkMobileVue'},
                navbar: {show: true, item: 'cart'},
            },
            component: Cart
        }, {
            path: '/user',
            name: 'User',
            meta: {
                header: {show: true, back: true, text: 'ThinkMobileVue'},
                navbar: {show: true, item: 'user'},
            },
            component: User
        }
    ]
})
