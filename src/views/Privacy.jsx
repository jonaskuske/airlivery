import React from 'react'
import DocumentTitle from 'react-document-title'
import styled from 'styled-components'

const Text = styled.p`
  max-width: 50rem;
`

export default () => (
  <DocumentTitle title="Datenschutz | airlivery">
    <main className="max-width">
      <h1>Datenschutz</h1>
      <Text>
        Falls Sie die im Impressum genannten Kontaktdaten zur Kontaktaufnahme
        nutzen, verwenden wir Ihre so erhaltenen Daten ausschließlich zur
        Beantwortung Ihrer Anfrage;<br />auf Wunsch löschen wir die Daten.
        <br />
        <br />
        Ansonsten verwendet und verarbeitet diese Seite keine privaten Daten.
      </Text>
    </main>
  </DocumentTitle>
)
