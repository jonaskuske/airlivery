import types from './types'

const mockDelivery = {
  type: 'from',
  from: 'Jonas Kuske',
  to: 'Viktoria Klat',
  date: new Date().toLocaleDateString({ locale: 'de-DE' }),
  number: 23037758,
  name: 'Amazon Sendung #784E43d',
}

const initialState = [1, 2, 3, 4, 5].map(() => {
  const type = Math.random() > 0.5 ? 'from' : 'to'
  return {
    ...mockDelivery,
    type,
    from: type === 'from' ? 'Jonas Kuske' : 'Viktoria Klat',
    to: type === 'from' ? 'Viktoria Klat' : 'Jonas Kuske',
  }
})

const deliveriesReducer = (state = initialState, { type, delivery }) => {
  switch (type) {
    case types.ADD_DELIVERY:
      return [delivery, ...state]

    default:
      return state
  }
}

export default deliveriesReducer
