import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Completed({ delivery }) {
  const { contact } = delivery

  return (
    <React.Fragment>
      <h2>Sendung ist unterwegs</h2>
      <p>
        Der Lieferauftrag wurde erfolgreich abgeschlossen.
        <br />
        Wir benachrichtigen dich, sobald die Sendung an {contact.name}{' '}
        zugestellt wurde.
      </p>
      <br />
      <br />
      <Button variant="contained" component={Link} to="/senden">
        Neuer Lieferauftrag
      </Button>
      <br />
      <Button variant="contained" component={Link} to="/">
        Zur Startseite
      </Button>
    </React.Fragment>
  )
}
