import types from './types'

const mockDelivery = {
  type: 'from',
  from: 'Jonas Kuske',
  to: 'Viktoria Klat',
  destination: 'Dropoff-Zone XA3',
  date: new Date().toLocaleDateString({ locale: 'de-DE' }),
  number: 230377588394985,
  name: 'Amazon Sendung #784E43d',
}

const initialState = [1, 2, 3, 4, 5].map(() => ({
  ...mockDelivery,
  type: Math.random() > 0.5 ? 'from' : 'to',
}))

const deliveriesReducer = (state = initialState, { type, delivery }) => {
  switch (type) {
    case types.ADD_DELIVERY:
      return [delivery, ...state]

    default:
      return state
  }
}

export default deliveriesReducer
