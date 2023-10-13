import { type User } from '@/types/users.ts'
import { type State } from '@/types/state.ts'

export const setFavoriteUsers = (state: State, payload: User[]) => {
  state.favoriteUsers = payload || []
}

export const toggleFavoriteUser = (state: State, payload: User) => {
  if (state.favoriteUsers.findIndex((favUser: User) => payload.url === favUser.url) < 0) {
    state.favoriteUsers.push({
      ...payload,
      is_favorite: true
    })
  } else {
    const userId = state.favoriteUsers.findIndex((usr) => payload.url === usr.url)
    state.favoriteUsers.splice(userId, 1)
  }

  localStorage.setItem('favorites', JSON.stringify(state.favoriteUsers))
}

export const setChosenUser = (state: State, payload: User) => {
  state.chosenUser = payload
}
