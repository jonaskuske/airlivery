import React from 'react'
import styled, { css } from 'styled-components'
import { withTheme } from '@material-ui/core'

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

const StyledPackageInput = withTheme()(styled.input`
  display: none;
  :checked + label {
    ${({ theme }) => css`
      outline: 2px solid ${theme.palette.primary.main};
    `};
  }
`)

const StyledPackageLabel = styled.label`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  transition: outline-color 0.25s ease-out;
  outline: 2px solid #d7d7d7;
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
  const { name, package: p } = props
  const { sizeName, price, weight, sizes } = p
  const { width, height, depth } = sizes
  const [euro, cents = ''] = price.toString().split('.')

  return (
    <StyledPackage>
      <StyledPackageInput type="radio" id={sizeName} name={name} {...props} />
      <StyledPackageLabel htmlFor={sizeName}>
        <StyledSizeName>{sizeName}</StyledSizeName>
        <p>Bis {weight}kg</p>
        <p>
          max. {width}x{height}x{depth}cm
        </p>
        <p>{`${euro},${cents.padEnd(2, '0')}€`}</p>
      </StyledPackageLabel>
    </StyledPackage>
  )
}
