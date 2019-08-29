import React from 'react'
import styled from 'styled-components'
import PaymentMethod from '../../../components/PaymentMethod'
import { withTheme } from '@material-ui/core'

const StyledPaymentContainer = styled.div`
  > div {
    margin-bottom: 1rem;
  }
`

const StyledInput = withTheme(styled.input`
  display: none;
  :checked + label > div,
  :checked + label [data-outline] {
    outline: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`)

const StyledLabel = styled.label`
  cursor: pointer;
`

export default ({ options, selection, setSelection }) => {
  const { paymentMethods } = options

  return (
    <div>
      <h2>Zahlungsmethode</h2>
      <p>Wähle die Zahlungsart, die wir für diese Lieferung belasten sollen.</p>
      <StyledPaymentContainer>
        {paymentMethods.map((method, i) => [
          <StyledInput
            key="input"
            id={`payment-select-${i}`}
            type="radio"
            name="payment-select"
            checked={method === selection.paymentMethod}
            onChange={() => setSelection('paymentMethod', method)}
          />,
          <StyledLabel htmlFor={`payment-select-${i}`} key="label">
            <PaymentMethod method={method} />
          </StyledLabel>,
          <br key="br" />,
        ])}
      </StyledPaymentContainer>
    </div>
  )
}
