import types from './types'

const authReducer = (state = { isAuth: false }, { type }) => {
  switch (type) {
    case types.LOGIN:
      return { isAuth: true }
    case types.LOGOUT:
      return { isAuth: false }
    default:
      return state
  }
}

export default authReducer
