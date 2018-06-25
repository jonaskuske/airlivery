import types from './types'

const addError = error => ({
  type: types.ADD_ERROR,
  error: { ...error, seen: false },
})

const setAsSeen = error => ({
  type: types.SET_AS_SEEN,
  error,
})

export default {
  addError,
  setAsSeen,
}
