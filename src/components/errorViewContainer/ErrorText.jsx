import React from 'react'
import styled from 'styled-components'

const StyledErrorTextContainer = styled.div`
  margin: 0.5rem 0;
`
const StyledErrorText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`
const StyledErrorCode = styled.span`
  opacity: 0.7;
`

export default ({ error }) => {
  const {
    code = '0x000a',
    message = 'Fehler',
    note = 'Bitte versuche es noch einmal und melde dich beim Support, falls das Problem erneut auftritt.',
  } = error

  return (
    <StyledErrorTextContainer>
      <StyledErrorText>
        {message} {code && <StyledErrorCode>({code})</StyledErrorCode>}
      </StyledErrorText>
      <br />
      <StyledErrorText>{note}</StyledErrorText>
    </StyledErrorTextContainer>
  )
}
