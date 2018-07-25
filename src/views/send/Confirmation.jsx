import React from 'react'
import styled from 'styled-components'
import ReactCountdownClock from 'react-countdown-clock'
import { withTheme } from '@material-ui/core'

const Main = styled.main`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  margin-bottom: 0;
`
const CountdownContainer = styled.div`
  align-self: center;
`
export default withTheme()(
  class extends React.Component {
    state = {
      showCountdown: true,
      time: 60 * 4 + 13,
    }

    hideCountdown = () => this.setState({ showCountdown: false })
    lowerTime = () => this.setState({ time: 6 })

    render() {
      const { theme } = this.props
      const { time, showCountdown } = this.state
      return (
        <Main className="max-width">
          <Title>Aktueller Lieferauftrag</Title>
          <h2>
            {showCountdown
              ? 'Ankunft der Drohne in'
              : 'Die Lieferdrohne ist da!'}
          </h2>
          <br />
          {showCountdown && (
            <React.Fragment>
              <CountdownContainer onClick={this.lowerTime}>
                <ReactCountdownClock
                  seconds={time}
                  size={220}
                  weight={15}
                  font="Montserrat, sans-serif"
                  color={theme.palette.primary.main}
                  onComplete={this.hideCountdown}
                />
              </CountdownContainer>
              <br />
            </React.Fragment>
          )}
          {showCountdown ? (
            <p>
              Bitte stelle sicher, dass der ausgewählte Airspot nicht blockiert
              ist.<br />Da die Drohne nicht in der Luft warten kann, falls eine
              Landung nicht möglich ist, muss sie in so einem Fall umkehren.<br />Für
              die unnötige Strecke wird dann eine kleine Servicegebühr
              berechnet.
            </p>
          ) : (
            <p>Drohne jetzt beladen.</p>
          )}
        </Main>
      )
    }
  },
)
