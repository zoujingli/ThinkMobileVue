import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    header: {show: false, text: '', back: false},
    navbar: {item: 'home', show: false},
}

const actions = {}

const mutations = {
    // 更新导航条参数
    setHeader: (state, option) => {
        state.header.text = option.text || ''
        state.header.show = option.show || false
        state.header.back = option.back || false
    },
    // 更新工具栏参数
    setNavbar: (state, option) => {
        state.navbar.item = option.item || 'home'
        state.navbar.show = option.show || false
    },
}

export default new Vuex.Store({state, mutations, actions})