import React from 'react'
import styled from 'styled-components'

const StyledPaypal = styled.div`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  background: #f0f0f0;
  outline: 2px solid #d6d6d6;
  transition: outline-color 0.25s ease-out;
  justify-content: space-between;
`

const StyledLogo = styled.img`
  width: 5rem;
`

export default ({ account }) => {
  return (
    <StyledPaypal>
      <StyledLogo
        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
        alt="PayPal logo"
      />
      <p>{account.mail}</p>
    </StyledPaypal>
  )
}
