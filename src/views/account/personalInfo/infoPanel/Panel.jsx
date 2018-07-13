import React from 'react'
import styled from 'styled-components'

const StyledInformationPanel = styled.div`
  align-self: center;
`
const StyledHeader = styled.p`
  font-weight: bold;
  margin: 0;
`
const StyledRow = styled.p`
  margin: 0.4rem 0;
`
export default ({ user, children, ...props }) => {
  const { adress, phone, email } = user
  return (
    <StyledInformationPanel {...props}>
      {children}
      <StyledHeader>Adresse</StyledHeader>
      <StyledRow>{`${adress.street} ${adress.streetNumber}`}</StyledRow>
      <StyledRow>{`${adress.plz} ${adress.city}`}</StyledRow>
      <StyledHeader>E-Mail</StyledHeader>
      <StyledRow>{email}</StyledRow>
      <StyledHeader>Telefon</StyledHeader>
      <StyledRow>{phone}</StyledRow>
    </StyledInformationPanel>
  )
}
