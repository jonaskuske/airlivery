import React from 'react'

import DeliveryListFilter from './deliveryDisplay/DeliveryListFilter'
import DeliveryList from './deliveryDisplay/DeliveryList'
import styled from 'styled-components'

const StyledDeliveryDisplay = styled.div`
  /* background: #efefef; */
`

export default class DeliveryDisplay extends React.Component {
  state = { filter: 'all' }

  handleChange = (filter) => this.setState({ filter })

  render() {
    const { filter } = this.state
    const { deliveries = {}, limit } = this.props
    const filteredDeliveries = deliveries[filter] || []
    const displayedDeliveries = limit
      ? filteredDeliveries.slice(0, limit)
      : filteredDeliveries

    return (
      <StyledDeliveryDisplay>
        <DeliveryListFilter onChange={this.handleChange} />
        <DeliveryList deliveries={displayedDeliveries} />
      </StyledDeliveryDisplay>
    )
  }
}
