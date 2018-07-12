import React from 'react'
import CreditCard from './paymentMethod/CreditCard'
import Paypal from './paymentMethod/Paypal'

export default ({ method }) => {
  const { type } = method || {}
  switch (type) {
    case 'creditcard':
      return <CreditCard card={method} />
    case 'paypal':
      return <Paypal account={method} />
    default:
      return null
  }
}
