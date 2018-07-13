import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledEditActions = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-end;
  align-items: flex-end;
  > button {
    margin-top: 1rem;
  }
`

export default () => {
  return (
    <StyledEditActions className="test">
      <p style={{ textAlign: 'right' }}>
        Passwort und Mail-Adresse lassen sich in den Einstellungen ändern.
      </p>
      <Button variant="outlined" size="small" color="primary">
        Bild ändern
      </Button>
      <Button variant="outlined" size="small" color="primary">
        Bild entfernen
      </Button>
    </StyledEditActions>
  )
}
