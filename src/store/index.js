import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication
  },
  plugins: [createPersistedState()]
})
