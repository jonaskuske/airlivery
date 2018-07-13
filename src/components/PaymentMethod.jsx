import React from 'react'
import CreditCard from './paymentMethod/CreditCard'
import Paypal from './paymentMethod/Paypal'

export default ({ method, edit }) => {
  const { type } = method || {}
  switch (type) {
    case 'creditcard':
      return <CreditCard card={method} edit={edit} />
    case 'paypal':
      return <Paypal account={method} />
    default:
      return null
  }
}
