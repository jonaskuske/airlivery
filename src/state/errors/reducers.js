import types from './types'

const errorsReducer = (state = [], { type, error }) => {
  switch (type) {
    case types.ADD_ERROR:
      return [...state, error]
    case types.SET_AS_SEEN:
      const target = state.find((e) => e === error)
      const rest = state.filter((e) => e !== error)
      target.seen = true
      return [...rest, target]
    default:
      return state
  }
}

export default errorsReducer
