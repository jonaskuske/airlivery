import React from 'react'
import Contact from '../Contact'
import PaymentMethod from '../PaymentMethod'
import Airspot from '../Airspot'
import PackageSize from '../PackageSize'

export default ({ selection }) => {
  const { destination, packageSize, airspot, paymentMethod } = selection

  return (
    <div>
      <h2>Angaben prüfen</h2>
      <p>
        Überprüfe noch einmal deine Auswahl.<br />
        Alles korrekt? Dann schließe mit "Fertig" den Vorgang zahlungspflichtig
        ab.
      </p>
      <p>
        <b>Gewählte Paketgröße:</b>
      </p>
      <PackageSize packageSize={packageSize} square={false} />
      <p>
        <b>Ziel:</b>
      </p>
      <Contact contact={destination} />
      <p>
        <b>Zahlungsmethode:</b>
      </p>
      <PaymentMethod method={paymentMethod} />
      <p>
        <b>Airspot:</b>
      </p>
      <Airspot airspot={airspot} />
      <br />
    </div>
  )
}
