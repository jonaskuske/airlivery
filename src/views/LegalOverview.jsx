import React from 'react'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

export default () => (
  <DocumentTitle title="Rechtliches | airlivery">
    <main className="max-width">
      <h1>Rechtliches</h1>
      <Link to="/impressum">Zum Impressum</Link>
      <br />
      <br />
      <Link to="/datenschutz">Zum Datenschutz</Link>
    </main>
  </DocumentTitle>
)
