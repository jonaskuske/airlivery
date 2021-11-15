import types from './types'

const updateUser = (user) => ({
  type: types.UPDATE_USER,
  user,
})

const setActiveUser = (user) => ({
  type: types.SET_ACTIVE_USER,
  user,
})

const removeActiveUser = () => ({
  type: types.REMOVE_ACTIVE_USER,
})

const obj = {
  updateUser,
  setActiveUser,
  removeActiveUser,
}

export default obj
