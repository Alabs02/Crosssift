/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import * as fb from '@/firebaseConfig'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,

  // modules
  modules: {
  }
})

