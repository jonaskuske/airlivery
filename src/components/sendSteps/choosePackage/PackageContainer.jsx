import React from 'react'
import styled from 'styled-components'

import Package from './Package'

const StyledPackageContainer = styled.form`
  display: flex;
  justify-content: space-between;
  > div {
    width: 100%;
    margin-right: 1rem;
  }
  > div:last-of-type {
    margin-right: 0;
  }
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    > div {
      width: 40%;
      flex-grow: 1;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
    > div:nth-child(2n) {
      margin-right: 0;
    }
  }
`

export default props => {
  const { packages } = props

  return (
    <StyledPackageContainer>
      {packages.map((p, i) => (
        <Package
          package={p}
          name="package-select"
          key={i}
          defaultChecked={i === 0}
        />
      ))}
    </StyledPackageContainer>
  )
}
