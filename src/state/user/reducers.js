import types from './types'

const userReducer = (state = {}, { type, user }) => {
  switch (type) {
    case types.UPDATE_USER:
      return { ...state, ...user }
    case types.SET_ACTIVE_USER:
      return user
    case types.REMOVE_ACTIVE_USER:
      return {}
    default:
      return state
  }
}

export default userReducer
