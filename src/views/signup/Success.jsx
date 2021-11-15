import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Success({ value, handleValueChange, ...props }) {
  return (
    <div {...props}>
      <h2>Anmeldung erfolgreich</h2>
      <p>
        {`Hallo ${value.firstName}`}, dein Account wurde erfolgreich angelegt.
        <br />
        Wir freuen uns, dich als Nutzer von airlivery begrüßen zu dürfen!
        <br />
        <br />
        Um airlivery vollständig nutzen zu können, musst du erst noch eine
        Zahlungsmethode und eine Landezone angeben. Besuche dafür deine
        Profilseite.
      </p>
      <Button variant="contained" color="primary">
        <Link to="/account">Jetzt einloggen!</Link>
      </Button>
    </div>
  )
}
