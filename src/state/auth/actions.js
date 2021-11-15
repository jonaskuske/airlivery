import types from './types'

const login = () => ({
  type: types.LOGIN,
})

const logout = () => ({
  type: types.LOGOUT,
})

const addKnownUser = (user) => ({
  type: types.ADD_KNOWN_USER,
  user,
})

const removeKnownUser = (user) => ({
  type: types.REMOVE_KNOWN_USER,
  user,
})

const obj = {
  login,
  logout,
  addKnownUser,
  removeKnownUser,
}

export default obj
