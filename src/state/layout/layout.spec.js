import reducer from './reducers'
import actions from './actions'
import types from './types'

describe('layoutActions', () => {
  describe('setMobileLayout', () => {
    const expectedAction = { type: types.SET_MOBILE_LAYOUT, mobile: true }
    expect(actions.setMobileLayout(true)).toEqual(expectedAction)
  })
})

describe('layoutReducer', () => {
  describe('setMobileLayout', () => {
    const setMobileLayout = actions.setMobileLayout(true)
    const initialState = { mobile: false }

    const result = reducer(initialState, setMobileLayout)

    it('should set mobile to true', () => {
      expect(result.mobile).toBe(true)
    })
  })
})
