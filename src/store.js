import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    navVaule: 'home'
}
const actions = {}
const mutations = {}

export default new Vuex.Store({state, mutations, actions})