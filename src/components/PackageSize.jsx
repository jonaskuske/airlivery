import React from 'react'
import styled, { css } from 'styled-components'

const StyledPackage = styled.div`
  position: relative;
  width: 100%;
  transition: outline-color 0.25s ease-out;
  outline: 2px solid #d7d7d7;
  width: 100%;
  background: #f0f0f0;
  ${({ square }) =>
    square &&
    css`
      height: 0;
      padding-bottom: 100%;
    `};
`

const StyledPackageSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  > p {
    margin: 0;
  }
  ${({ square }) =>
    square &&
    css`
      position: absolute;
      top: 0;
      flex-direction: column;
    `};
`
const StyledSizeName = styled.p`
  font-size: 2.5rem;
  margin: 0;
`
export default function PackageSize({ packageSize, square = true }) {
  const { sizeName, price, weight, sizes } = packageSize
  const { width, height, depth } = sizes
  const [euro, cents = ''] = price.toString().split('.')

  return (
    <StyledPackage square={square}>
      <StyledPackageSize square={square}>
        <StyledSizeName>{sizeName}</StyledSizeName>
        <p>Bis {weight}kg</p>
        <p>
          max. {width}x{height}x{depth}cm
        </p>
        <p>{`${euro},${cents.padEnd(2, '0')}€`}</p>
      </StyledPackageSize>
    </StyledPackage>
  )
}
