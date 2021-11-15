import React from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/core'
import DroneCountdown from './activeDelivery/DroneCountdown'
import DroneLanded from './activeDelivery/DroneLanded'
import Completed from './activeDelivery/Completed'
import { useLocation } from 'react-router'

const Main = styled.main`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  margin-bottom: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

class ActiveDelivery extends React.Component {
  state = {
    countdownActive: true,
    completed: false,
    time: 60 * 4 + 13,
  }

  onComplete = () => this.setState({ completed: true })
  hideCountdown = () => this.setState({ countdownActive: false })
  lowerTime = () => this.setState({ time: 6 })

  render() {
    const { theme, location } = this.props
    const { time, countdownActive, completed } = this.state

    const { delivery } = location.state

    return (
      <Main className="max-width">
        <Title>Lieferung an {delivery.contact.name.split(' ')[0]}</Title>
        {completed ? (
          <Completed delivery={delivery} />
        ) : countdownActive ? (
          <DroneCountdown
            delivery={delivery}
            countdownTime={time}
            countdownColor={theme.palette.primary.main}
            onCountdownClick={this.lowerTime}
            onCountdownComplete={this.hideCountdown}
          />
        ) : (
          <DroneLanded delivery={delivery} onComplete={this.onComplete} />
        )}
      </Main>
    )
  }
}

function ActiveDeliveryWithLocation(props) {
  const location = useLocation()
  return <ActiveDelivery {...props} location={location} />
}

export default withTheme(ActiveDeliveryWithLocation)
