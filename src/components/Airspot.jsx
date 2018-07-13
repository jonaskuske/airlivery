import React from 'react'
import styled, { css } from 'styled-components'
import { Zoom } from '@material-ui/core'
import MicroButton from './MicroFloatingActionButton'
import { Delete, Edit } from '@material-ui/icons'

import defaultMap from '../assets/images/map.jpg'

const StyledAirspot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #f0f0f0;
  transition: outline-color 0.25s ease-out;
  outline: 2px solid #d6d6d6;
  position: relative;
`
const StyledAirspotHeader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > button {
    margin-right: 0.5rem;
  }
`
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
    name = 'Airspot',
    adress = {
      street: 'Lange Straße',
      streetNumber: '1',
      plz: 27568,
      city: 'Bremerhaven',
    },
    map = defaultMap,
    edit = false,
  } = props

  const { street, streetNumber, plz, city } = adress

  const adressString = `${street} ${streetNumber}, ${plz} ${city}`

  return (
    <StyledAirspot>
      <StyledAirspotHeader>
        <Zoom in={edit}>
          <MicroButton color="primary">
            <Edit />
          </MicroButton>
        </Zoom>
        <Zoom in={edit}>
          <MicroButton color="primary">
            <Delete />
          </MicroButton>
        </Zoom>
      </StyledAirspotHeader>

      <StyledAirspotName>{name}</StyledAirspotName>
      <StyledAirspotAdress>{adressString}</StyledAirspotAdress>
      <StyledAirspotMap map={map} />
    </StyledAirspot>
  )
}
