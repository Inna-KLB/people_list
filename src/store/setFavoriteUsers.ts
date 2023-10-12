import { StateInterface } from './mutations'

export const setFavoriteUsers = (state: StateInterface, payload) => {
  console.log('🚀 ~ setFavoriteUsers ~ state.favoriteUsers:', payload)
  // state.favoriteUsers = payload
}
