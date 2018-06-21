import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  'statLinks': []
}
const mutations = {
  setStatlinks (state, statLinks) {
    state.statLinks = statLinks
  }
}
const actions = {
  async fetchStatlinks ({commit}) {
    const url = 'http://localhost:3000/api/getstatlinks'
    const response = await axios.get(url)
    commit('setStatlinks', response.data)
  }
}
const getters = {
  getStatlinks: state => state.statLinks
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
