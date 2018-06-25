import React from 'react'
import { connect } from 'react-redux'

import { deliveriesSelectors as selectors } from '../state/deliveries'

import DeliveryListFilter from './deliveryDisplay/DeliveryListFilter'
import DeliveryList from './deliveryDisplay/DeliveryList'
import styled from 'styled-components'

const StyledDeliveryDisplay = styled.div`
  /* background: #efefef; */
`

class DeliveryDisplay extends React.Component {
  state = { filter: 'all' }

  handleChange = filter => this.setState({ filter })

  render() {
    const { filter } = this.state
    const { deliveries } = this.props
    const displayedDeliveries = deliveries[filter] || []

    return (
      <StyledDeliveryDisplay>
        <DeliveryListFilter onChange={this.handleChange} />
        <DeliveryList deliveries={displayedDeliveries} />
      </StyledDeliveryDisplay>
    )
  }
}

const mapStateToProps = state => ({
  deliveries: {
    all: state.deliveries,
    from: selectors.getDeliveriesFromUser(state),
    to: selectors.getDeliveriesToUser(state),
  },
})

export default connect(mapStateToProps)(DeliveryDisplay)
