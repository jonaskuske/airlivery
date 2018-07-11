import React from 'react'
import styled, { css } from 'styled-components'
import Airspot from '../Airspot'
import { withTheme } from '@material-ui/core'

const StyledAirspotContainer = styled.form`
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

const temp = [
  {
    name: 'Garageneinfahrt',
    adress: {
      street: 'Lange Gasse',
      streetNumber: '',
      plz: '',
      city: 'Münsingen',
    },
  },
  {
    name: 'Dachterasse',
    adress: {
      street: 'Lange Gasse',
      streetNumber: '3',
      plz: 73456,
      city: 'Münsingen',
    },
  },
]

export default ({ data }) => {
  const { airspots = temp } = data

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
            />,
            <label htmlFor={`airspot-select-${index}`} key="label">
              <Airspot name={airspot.name} adress={airspot.adress} />
            </label>,
            <br key="br" />,
          ]
        })}
      </StyledAirspotContainer>
    </div>
  )
}
