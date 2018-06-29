import React from 'react'
import styled from 'styled-components'
import CreditCard from '../CreditCard'

const StyledPaymentContainer = styled.div`
  > div {
    margin-bottom: 1rem;
  }
`

export default props => {
  return (
    <div>
      <h2>Zahlungsinformationen</h2>
      <StyledPaymentContainer>
        {[1, 2].map(i => <CreditCard key={i} />)}
      </StyledPaymentContainer>
    </div>
  )
}
