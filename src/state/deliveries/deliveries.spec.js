import reducer from './reducers'
import actions from './actions'
import types from './types'

describe('deliveriesActions', () => {
  describe('addDelivery', () => {
    const delivery = {
      from: 'Jonas Kuske',
      to: 'Viktoria Klat',
    }
    const expectedAction = { type: types.ADD_DELIVERY, delivery }
    expect(actions.addDelivery(delivery)).toEqual(expectedAction)
  })
})

describe('deliveriesReducer', () => {
  describe('login', () => {
    const delivery = {
      from: 'Jonas Kuske',
      to: 'Viktoria Klat',
    }
    const addDelivery = actions.addDelivery(delivery)
    const initialState = [{ from: 'a', to: 'b' }]

    const result = reducer(initialState, addDelivery)

    it('should add the delivery', () => {
      expect(result.length).toBe(2)
    })
  })
})
