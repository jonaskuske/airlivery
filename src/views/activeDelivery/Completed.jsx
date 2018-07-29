import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default ({ delivery }) => {
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
