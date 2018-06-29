import React from 'react'
import styled, { css } from 'styled-components'
import { withTheme } from '@material-ui/core'

import defaultMap from '../assets/images/map.jpg'

const StyledAirspot = withTheme()(styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ${({ theme }) => css`
    border: 2px solid ${theme.palette.primary.main};
  `};
`)
const StyledAirspotName = styled.p`
  font-weight: bold;
  margin: 0;
`
const StyledAirspotAdress = styled.p`
  font-size: 0.8rem;
  margin: 0 0 1rem 0;
`

const StyledAirspotMap = styled.div`
  width: 100%;
  background: transparent center / cover no-repeat;
  ${({ map }) => css`
    background-image: url(${map});
  `};
  ::before {
    content: '';
    display: block;
    margin-top: 75%;
  }
`

export default props => {
  const {
    name = 'Airspot 1',
    adress = 'Lange Straße 1, 27568 Bremerhaven',
    map = defaultMap,
  } = props

  return (
    <StyledAirspot>
      <StyledAirspotName>{name}</StyledAirspotName>
      <StyledAirspotAdress>{adress}</StyledAirspotAdress>
      <StyledAirspotMap map={map} />
    </StyledAirspot>
  )
}
