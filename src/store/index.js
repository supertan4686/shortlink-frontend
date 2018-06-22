import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiurl = 'http://localhost:3000/api/'
const mainurl = 'http://localhost:8080/'

const state = {
  'statLinks': [],
  'shortlink': '',
  'reallink': ''
}
const mutations = {
  setStatlinks (state, statLinks) {
    state.statLinks = statLinks
  },
  setShortlink (state, shortlink) {
    state.shortlink = mainurl + shortlink
  },
  setReallink (state, reallink) {
    state.reallink = reallink
  }
}
const actions = {
  async fetchStatlinks ({commit}) {
    const url = apiurl + 'getstatlinks'
    const response = await axios.get(url)
    commit('setStatlinks', response.data)
  },
  async genShortlink ({commit}, data) {
    const url = apiurl + 'add'
    const response = await axios.post(url, data)
    commit('setShortlink', response.data.shortlink)
  },
  async getReallink ({commit}, shortlink) {
    const url = apiurl + 'get/' + shortlink
    const response = await axios.get(url)
    console.log(response.data.reallink)
    commit('setReallink', response.data.reallink)
  }
}
const getters = {
  getStatlinks: state => state.statLinks,
  getShortlink: state => state.shortlink,
  resultReallink: state => state.reallink

}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
