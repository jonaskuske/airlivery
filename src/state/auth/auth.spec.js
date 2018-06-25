import reducer from './reducers'
import actions from './actions'
import types from './types'

describe('authActions', () => {
  describe('login', () => {
    const expectedAction = { type: types.LOGIN }
    expect(actions.login()).toEqual(expectedAction)
  })
  describe('logout', () => {
    const expectedAction = { type: types.LOGOUT }
    expect(actions.logout()).toEqual(expectedAction)
  })
})

describe('authReducer', () => {
  describe('login', () => {
    const login = actions.login()
    const initialState = { isAuth: false }

    const result = reducer(initialState, login)

    it('should login', () => {
      expect(result.isAuth).toBe(true)
    })
  })

  describe('logout', () => {
    const logout = actions.logout()
    const initialState = { isAuth: true }

    const result = reducer(initialState, logout)

    it('should logout', () => {
      expect(result.isAuth).toBe(false)
    })
  })
})
