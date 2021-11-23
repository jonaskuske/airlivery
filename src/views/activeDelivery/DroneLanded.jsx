import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import ReactCountdownClock from 'react-countdown-clock'

const RemainingTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default class DroneLanded extends React.Component {
  state = { showConfirm: false }
  toggleConfirm = () => this.setState((p) => ({ showConfirm: !p.showConfirm }))

  render() {
    const { delivery, onComplete } = this.props
    const { showConfirm } = this.state

    return (
      <React.Fragment>
        <h2>Drohne jetzt beladen</h2>
        <p>
          Die Drohne ist bei "{delivery.airspot.name}" eingetroffen. Du hast nun
          bis zu 10 Minuten Zeit, um die Drohne mit deiner Sendung zu beladen.
        </p>
        <RemainingTime>
          <p>
            <b>Verbleibende Zeit:</b>
          </p>
          <ReactCountdownClock
            seconds={600}
            size={65}
            weight={5}
            color="#505050"
            font="Montserrat, sans-serif"
            onComplete={onComplete}
          />
        </RemainingTime>
        <h2>{showConfirm ? 'Wirklich alles bereit?' : 'Abschließen'}</h2>
        <p>
          Bestätige hier, sobald die Drohne beladen ist und sich wieder auf den
          Weg machen kann.
        </p>
        {showConfirm ? (
          <React.Fragment>
            <Button onClick={this.toggleConfirm}>Abbrechen</Button>
            <br />
            <Button variant="contained" color="secondary" onClick={onComplete}>
              Abflug!
            </Button>
          </React.Fragment>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={this.toggleConfirm}
          >
            Fertig beladen!
          </Button>
        )}
      </React.Fragment>
    )
  }
}
