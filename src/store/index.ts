import { createStore } from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  favoriteUsers: [],
  chosenUser: {}
}

export default createStore({
  state,
  getters,
  mutations
})
