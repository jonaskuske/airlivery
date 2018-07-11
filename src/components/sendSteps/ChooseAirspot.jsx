import React from 'react'
import styled from 'styled-components'
import Airspot from '../Airspot'

const StyledAirspotContainer = styled.div`
  > div {
    margin-bottom: 1rem;
  }
`

export default props => {
  return (
    <div>
      <h2>Airspot auswählen</h2>
      <p>Wähle den Airspot, von dem aus du das Paket versenden willst.</p>
      <StyledAirspotContainer>
        {[1, 2, 3].map(i => <Airspot key={i} />)}
      </StyledAirspotContainer>
    </div>
  )
}
