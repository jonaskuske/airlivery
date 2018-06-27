import React from 'react'
import styled from 'styled-components'

import Package from './Package'

const StyledPackageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    width: 47%;
    margin-bottom: 1rem;
  }
`

export default props => {
  const { packages } = props

  return (
    <StyledPackageContainer>
      {packages.map((p, i) => <Package package={p} key={i} />)}
    </StyledPackageContainer>
  )
}
