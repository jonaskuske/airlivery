import React from 'react'
import styled, { css } from 'styled-components'
import PaymentMethod from '../PaymentMethod'
import { withTheme } from '@material-ui/core'

const StyledPaymentContainer = styled.div`
  > div {
    margin-bottom: 1rem;
  }
`

const StyledInput = withTheme()(styled.input`
  display: none;
  :checked + label > div {
    ${({ theme }) => css`
      outline: 2px solid ${theme.palette.primary.main};
    `};
  }
`)

const StyledLabel = styled.label`
  cursor: pointer;
`

export default ({ data, actions }) => {
  const { paymentMethods } = data

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
            defaultChecked={i === 0}
            onChange={() => actions.setPaymentMethod(method)}
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
