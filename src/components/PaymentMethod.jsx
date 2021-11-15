import React from 'react'
import CreditCard from './paymentMethod/CreditCard'
import Paypal from './paymentMethod/Paypal'
import { connect } from 'react-redux'
import { paymentMethodsActions } from '../state/payments/methods'

const PaymentMethod = ({
  method,
  edit,
  updatePaymentMethod,
  removePaymentMethod,
}) => {
  const { type } = method || {}
  switch (type) {
    case 'creditcard':
      return (
        <CreditCard
          card={method}
          edit={edit}
          updatePaymentMethod={updatePaymentMethod}
          removePaymentMethod={removePaymentMethod}
        />
      )
    case 'paypal':
      return (
        <Paypal
          account={method}
          edit={edit}
          updatePaymentMethod={updatePaymentMethod}
          removePaymentMethod={removePaymentMethod}
        />
      )
    default:
      return null
  }
}

const { updatePaymentMethod, removePaymentMethod } = paymentMethodsActions
const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  updatePaymentMethod: (prev, m) => dispatch(updatePaymentMethod(prev, m)),
  removePaymentMethod: (method) => dispatch(removePaymentMethod(method)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod)
