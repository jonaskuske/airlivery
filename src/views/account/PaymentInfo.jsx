import React from 'react'
import styled from 'styled-components'
import { Zoom, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import PaymentMethod from '../../components/PaymentMethod'
import { paymentMethodsActions } from '../../state/payments/methods'
import { connect } from 'react-redux'

const StyledPaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  > div {
    margin-bottom: 1rem;
  }
  > button {
    margin-top: -0.5rem;
    align-self: flex-end;
  }
`

const PaymentInfo = ({ paymentMethods, edit, addPaymentMethod }) => {
  return (
    <StyledPaymentInfo>
      <h3>Kreditkarten</h3>
      {paymentMethods
        .filter(({ type }) => type === 'creditcard')
        .map((method, index) => (
          <PaymentMethod method={method} key={index} edit={edit} />
        ))}
      <Zoom in={edit} unmountOnExit>
        <Fab
          color="primary"
          onClick={() => addPaymentMethod({ type: 'creditcard' })}
        >
          <Add />
        </Fab>
      </Zoom>
      <h3>PayPal</h3>
      {paymentMethods
        .filter(({ type }) => type === 'paypal')
        .map((method, index) => (
          <PaymentMethod method={method} key={index} edit={edit} />
        ))}
      <Zoom in={edit} unmountOnExit>
        <Fab
          color="primary"
          onClick={() => addPaymentMethod({ type: 'paypal' })}
        >
          <Add />
        </Fab>
      </Zoom>
    </StyledPaymentInfo>
  )
}

const { addPaymentMethod } = paymentMethodsActions
const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  addPaymentMethod: (method) => dispatch(addPaymentMethod(method)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PaymentInfo)
