// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'muse-ui/lib/styles/base.less'
import 'muse-ui/lib/styles/theme.less';

import {BottomNav, AppBar, Button, Icon, Card} from 'muse-ui'

Vue.use(Icon)
Vue.use(Card)
Vue.use(AppBar)
Vue.use(Button)
Vue.use(BottomNav)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
