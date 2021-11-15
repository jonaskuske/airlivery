import types from './types'

const addError = (error) => ({
  type: types.ADD_ERROR,
  error: { ...error, seen: false },
})

const setAsSeen = (error) => ({
  type: types.SET_AS_SEEN,
  error,
})

const obj = {
  addError,
  setAsSeen,
}

export default obj
