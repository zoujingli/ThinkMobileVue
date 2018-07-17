import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Order from '@/pages/Order'
import Cart from '@/pages/Cart'
import User from '@/pages/User'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/order',
            name: 'Order',
            component: Order
        }, {
            path: '/cart',
            name: 'Cart',
            component: Cart
        }, {
            path: '/user',
            name: 'User',
            component: User
        }
    ]
})
