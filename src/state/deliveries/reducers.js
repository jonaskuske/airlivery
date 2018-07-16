import types from './types'
import { MockDelivery } from '../../utils/mocks/deliveries'

const initialState = [...Array(7)].map(() => new MockDelivery())

const deliveriesReducer = (state = initialState, { type, delivery }) => {
  switch (type) {
    case types.ADD_DELIVERY:
      return [delivery, ...state]

    default:
      return state
  }
}

export default deliveriesReducer
