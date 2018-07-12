import React from 'react'

export default props => {
  return (
    <div>
      <h2>Bestellung abgeschlossen</h2>
      <p>Die Lieferdrohne ist unterwegs.</p>
      <br />
      <br />
      <p>
        Bitte stelle sicher, dass der ausgewählte Airspot nicht blockiert ist.<br />Da
        die Drohne nicht in der Luft warten kann, falls eine Landung nicht
        möglich ist, muss sie in so einem Fall umkehren.<br />Für die unnötige
        Strecke wird dann eine kleine Servicegebühr berechnet.
      </p>
    </div>
  )
}
