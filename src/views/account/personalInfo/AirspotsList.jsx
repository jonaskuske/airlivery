import React from 'react'
import styled from 'styled-components'
import { Zoom, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Airspot from '../../../components/Airspot'

const AirspotContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  > div {
    margin-bottom: 1rem;
  }
  > div:last-of-type {
    margin-bottom: 0.5rem;
  }
  > button {
    align-self: flex-end;
  }
`

export default function AirSpotsList({ airspots, edit, actions }) {
  return (
    <AirspotContainer>
      <h3>Deine Airspots</h3>
      {airspots.map((airspot, index) => (
        <Airspot
          airspot={airspot}
          key={index}
          edit={edit}
          onRemove={actions.removeAirspot}
        />
      ))}
      <Zoom in={edit} unmountOnExit>
        <Fab color="primary" onClick={actions.addAirspot}>
          <Add />
        </Fab>
      </Zoom>
    </AirspotContainer>
  )
}
