import React from 'react'
import styled from 'styled-components'
const StyledPackage = styled.div`
  position: relative;
  width: 100%;
  background: #f0f0f0;
  ::before {
    content: '';
    display: block;
    margin-top: 100%;
  }
`

const StyledPackageInner = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  > p {
    margin: 0;
  }
`
const StyledSizeName = styled.p`
  font-size: 2.5rem;
  margin: 0;
`
export default props => {
  const { sizeName, price, weight, sizes } = props.package
  const { width, height, depth } = sizes
  const [euro, cents = ''] = price.toString().split('.')

  return (
    <StyledPackage>
      <StyledPackageInner>
        <StyledSizeName>{sizeName}</StyledSizeName>
        <p>Bis {weight}kg</p>
        <p>
          max. {width}x{height}x{depth}cm
        </p>
        <p>{`${euro},${cents.padEnd(2, '0')}€`}</p>
      </StyledPackageInner>
    </StyledPackage>
  )
}
