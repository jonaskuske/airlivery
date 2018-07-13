import React from 'react'
import styled from 'styled-components'
import { Zoom, Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import PaymentMethod from '../../components/PaymentMethod'

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

const mocks = [
  {
    type: 'creditcard',
    name: 'Jonas Kuske',
    expiry: '09/19',
    cvc: '873',
    number: '5180427132637683',
  },
  {
    type: 'paypal',
    mail: 'sample@jonaskuske.com',
  },
  {
    type: 'creditcard',
    name: 'Jonas Kuske',
    expiry: '02/21',
    cvc: '356',
    number: '4716796276620325',
  },
]

export default ({ paymentMethods = mocks, edit }) => {
  return (
    <StyledPaymentInfo>
      <h3>Kreditkarten</h3>
      {paymentMethods
        .filter(({ type }) => type === 'creditcard')
        .map((method, index) => (
          <PaymentMethod method={method} key={index} edit={edit} />
        ))}
      <Zoom in={edit} unmountOnExit>
        <Button variant="fab" mini color="primary">
          <Add />
        </Button>
      </Zoom>
      <h3>Paypal</h3>
      {paymentMethods
        .filter(({ type }) => type === 'paypal')
        .map((method, index) => (
          <PaymentMethod method={method} key={index} edit={edit} />
        ))}
      <Zoom in={edit} unmountOnExit>
        <Button variant="fab" mini color="primary">
          <Add />
        </Button>
      </Zoom>
    </StyledPaymentInfo>
  )
}
