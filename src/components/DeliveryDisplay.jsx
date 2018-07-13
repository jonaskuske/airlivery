import React from 'react'

import DeliveryListFilter from './deliveryDisplay/DeliveryListFilter'
import DeliveryList from './deliveryDisplay/DeliveryList'
import styled from 'styled-components'

const StyledDeliveryDisplay = styled.div`
  /* background: #efefef; */
`

export default class extends React.Component {
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
