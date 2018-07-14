import React from 'react'
import styled, { css } from 'styled-components'
import Airspot from '../Airspot'
import { withTheme } from '@material-ui/core'

const StyledAirspotContainer = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 901px) {
    flex-flow: row wrap;
    > label {
      width: 40%;
      flex-grow: 1;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
    > label:nth-child(4n) {
      margin-right: 0;
    }
  }
  > div {
    margin-bottom: 1rem;
  }
`
const StyledInput = withTheme()(styled.input`
  display: none;
  :checked + label > div {
    ${({ theme }) => css`
      outline: 2px solid ${theme.palette.primary.main};
    `}
`)

const StyledLabel = styled.label`
  cursor: pointer;
`

export default ({ data, actions }) => {
  const { airspots } = data
  const { setAirspot } = actions

  return (
    <div>
      <h2>Airspot auswählen</h2>
      <p>Wähle den Airspot, von dem aus du das Paket versenden willst.</p>
      <StyledAirspotContainer>
        {airspots.map((airspot, index) => {
          return [
            <StyledInput
              type="radio"
              name="airspot-select"
              key="input"
              id={`airspot-select-${index}`}
              defaultChecked={index === 0}
              onChange={() => setAirspot(airspot)}
            />,
            <StyledLabel htmlFor={`airspot-select-${index}`} key="label">
              <Airspot airspot={airspot} />
            </StyledLabel>,
            <br key="br" />,
          ]
        })}
      </StyledAirspotContainer>
    </div>
  )
}
