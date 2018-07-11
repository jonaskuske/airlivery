import React from 'react'
import PackageContainer from './choosePackage/PackageContainer'

const packageSizes = [
  {
    sizeName: 'XS',
    price: 2.5,
    weight: 0.5,
    sizes: { width: 60, height: 40, depth: 60 },
  },
  {
    sizeName: 'S',
    price: 3,
    weight: 1,
    sizes: { width: 60, height: 40, depth: 60 },
  },
  {
    sizeName: 'M',
    price: 3.5,
    weight: 2,
    sizes: { width: 60, height: 40, depth: 60 },
  },
  {
    sizeName: 'L',
    price: 4,
    weight: 3,
    sizes: { width: 60, height: 40, depth: 60 },
  },
]

export default props => {
  const { actions, selection } = props
  return (
    <div>
      <h2>Größe auswählen</h2>
      <PackageContainer
        packages={packageSizes}
        actions={actions}
        selection={selection}
      />
    </div>
  )
}
