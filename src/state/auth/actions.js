import types from './types'

const login = () => ({
  type: types.LOGIN,
})

const logout = () => ({
  type: types.LOGOUT,
})

export default {
  login,
  logout,
}
