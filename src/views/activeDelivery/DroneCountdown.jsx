import React from 'react'
import styled from 'styled-components'
import ReactCountdownClock from 'react-countdown-clock'

const CountdownContainer = styled.div`
  align-self: center;
`
const Notice = styled.p`
  color: #585858;
  font-size: 85%;
`

export default function DroneCountdown({
  delivery,
  countdownTime,
  countdownColor,
  onCountdownClick,
  onCountdownComplete,
}) {
  return (
    <React.Fragment>
      <h2>Ankunft der Abhol-Drohne in</h2>
      <br />
      <CountdownContainer onClick={onCountdownClick}>
        <ReactCountdownClock
          seconds={countdownTime}
          size={220}
          weight={15}
          font="Montserrat, sans-serif"
          color={countdownColor}
          onComplete={onCountdownComplete}
        />
      </CountdownContainer>
      <br />
      <Notice>
        Test-Hinweis: Countdown antippen, um die Wartezeit zu verkürzen.
      </Notice>
      <p>
        <b>
          Eine Lieferdrohne ist unterwegs zum Airspot "{delivery.airspot.name}".
        </b>
        <br />
        <br />
        Bitte stelle sicher, dass der Airspot nicht blockiert ist.
        <br />
        Da die Drohne nicht in der Luft warten kann, falls eine Landung nicht
        möglich ist, muss sie in so einem Fall umkehren.
        <br />
        Für die unnötige Strecke wird dann eine kleine Servicegebühr berechnet.
      </p>
    </React.Fragment>
  )
}
