import api from '../../api'
import * as types from '../types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  async getAllProducts({ commit }) {
    let products = await api.getProducts()
    commit(types.RECEIVE_PRODUCTS, { products })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS](state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART](state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
