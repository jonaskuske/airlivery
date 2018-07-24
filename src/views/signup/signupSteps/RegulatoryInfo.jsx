import React from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Subtitle = styled.h2`
  margin: 1.5rem 0 0.5rem 0;
`
const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 0.5rem;
  }
`

export default ({ handleValueChange, value, showFormErrors, ...props }) => {
  return (
    <Container {...props}>
      <Subtitle>Kontaktdaten</Subtitle>
      <StyledTextField
        name="email"
        label="E-Mail"
        value={value.email}
        type="email"
        placeholder="sample@mail.com"
        onChange={handleValueChange}
        required
        error={showFormErrors && !value.email}
      />
      <StyledTextField
        name="phone"
        label="Telefon"
        type="tel"
        value={value.phone}
        placeholder="01604568349"
        onChange={handleValueChange}
      />
      <Subtitle>Passwort</Subtitle>
      <StyledTextField
        value={value.password}
        name="password"
        type="password"
        label="Passwort"
        onChange={handleValueChange}
        required
        error={showFormErrors && !value.password}
      />
      <StyledTextField
        onChange={handleValueChange}
        type="password"
        value={value.confirmPassword}
        name="confirmPassword"
        label="Passwort wiederholen"
        required
        error={
          (showFormErrors && !value.confirmPassword) ||
          (!!value.confirmPassword && value.confirmPassword !== value.password)
        }
      />
    </Container>
  )
}
