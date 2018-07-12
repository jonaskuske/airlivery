import React from 'react'
import styled, { css } from 'styled-components'
import { withTheme } from '@material-ui/core'
import PackageSize from '../PackageSize'

const StyledPackageContainer = styled.form`
  display: flex;
  justify-content: space-between;
  > label {
    width: 100%;
    margin-right: 1rem;
  }
  > label:last-of-type {
    margin-right: 0;
  }
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    > label {
      width: 40%;
      flex-grow: 1;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
    > label:last-of-type {
      margin-right: 1rem;
    }
    > label:nth-child(4n) {
      margin-right: 0;
    }
  }
`

const StyledInput = withTheme()(styled.input`
  display: none;
  :checked + label > div {
    ${({ theme }) => css`
      outline: 2px solid ${theme.palette.primary.main};
    `};
  }
`)

const StyledLabel = styled.label`
  cursor: pointer;
`

export default ({ actions, data }) => {
  const { packageSizes } = data
  return (
    <div>
      <h2>Paketgröße</h2>
      <p>Wähle die Größe deines Paketes.</p>
      <StyledPackageContainer>
        {packageSizes.map((packageSize, index) => [
          <StyledInput
            type="radio"
            name="package-size-select"
            defaultChecked={index === 0}
            id={`package-size-select-${index}`}
            key="input"
            onChange={() => actions.setPackageSize(packageSize)}
          />,
          <StyledLabel key="label" htmlFor={`package-size-select-${index}`}>
            <PackageSize packageSize={packageSize} />
          </StyledLabel>,
        ])}
      </StyledPackageContainer>
    </div>
  )
}
