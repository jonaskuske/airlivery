import React from 'react'
import styled from 'styled-components'
import { Zoom, Button } from '@material-ui/core'
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

export default ({ airspots = [!!0, !!0], edit }) => {
  return (
    <AirspotContainer>
      <h3>Meine Airspots</h3>
      {airspots.map((airspot, index) => (
        <Airspot airspot={airspot} key={index} edit={edit} />
      ))}
      <Zoom in={edit} unmountOnExit>
        <Button variant="fab" mini color="primary">
          <Add />
        </Button>
      </Zoom>
    </AirspotContainer>
  )
}
