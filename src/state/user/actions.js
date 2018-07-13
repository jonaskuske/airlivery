import types from './types'

const updateUser = user => ({
  type: types.UPDATE_USER,
  user,
})

export default {
  updateUser,
}
