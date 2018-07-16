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

export default ({ handleValueChange, value, ...props }) => {
  return (
    <Container {...props}>
      <Subtitle>Passwort</Subtitle>
      <TextField
        value={value.password}
        name="password"
        type="password"
        label="Passwort"
        onChange={handleValueChange}
      />
      <TextField
        onChange={handleValueChange}
        type="password"
        value={value.confirmPassword}
        name="confirmPassword"
        label="Passwort wiederholen"
        error={value.confirmPassword !== value.password}
      />
      <Subtitle>Weiteres</Subtitle>
      <p>
        Durch die Anmeldung stimmst du unseren Allgemeinen Geschäftsbedingungen
        zu.
      </p>
    </Container>
  )
}
