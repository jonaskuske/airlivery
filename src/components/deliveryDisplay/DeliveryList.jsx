import React from 'react'
import DeliveryListEntry from './DeliveryListEntry'

export default function DeliveryList({ deliveries }) {
  return (
    <div>
      {deliveries.length ? (
        deliveries.map((item, i) => (
          <DeliveryListEntry entry={item} key={i + item.number} />
        ))
      ) : (
        <p>Noch keine Lieferungen.</p>
      )}
    </div>
  )
}
