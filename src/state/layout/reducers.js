import types from './types'

const layoutReducer = (state = { mobile: false }, { type, mobile }) => {
  switch (type) {
    case types.SET_MOBILE_LAYOUT:
      return { ...state, mobile }

    default:
      return state
  }
}

export default layoutReducer
