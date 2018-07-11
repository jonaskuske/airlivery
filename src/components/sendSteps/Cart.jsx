import React from 'react'
import Contact from '../Contact'

export default props => {
  const { destination, package: pack } = props.selection
  console.log(pack)
  return (
    <div>
      <h2>Angaben prüfen</h2>
      <p>Gewählte Paketgröße:</p>
      <p>
        <b>{pack.sizeName}</b> - <span>max. {pack.weight}kg</span>
      </p>
      <p>Ziel:</p>
      <Contact contact={destination} />
    </div>
  )
}
