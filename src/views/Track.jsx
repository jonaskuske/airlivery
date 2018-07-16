import React from 'react'
import styled, { css } from 'styled-components'
import { TextField, withTheme } from '@material-ui/core'
import Delivery from '../components/deliveryDisplay/DeliveryListEntry'
import { MockDelivery } from '../utils/mocks/deliveries'
import droneImage from '../assets/icons/drone-gray.svg'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 120px);
  ${({ empty }) =>
    empty &&
    css`
      background: url(${droneImage}) center / 30% no-repeat;
    `};
`
const Status = withTheme()(styled.p`
  align-self: flex-start;
  font-weight: 600;
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
  `};
`)
export default class extends React.Component {
  state = { query: '' }

  setQuery = ({ target }) => this.setState({ query: target.value })

  render() {
    const { query } = this.state
    return (
      <Main className="max-width" empty={!query}>
        <h1>Sendungsverfolgung</h1>
        <TextField
          value={query}
          onChange={this.setQuery}
          placeholder="Sendungsnummer eingeben"
        />
        {query && (
          <React.Fragment>
            <h2>Sendung</h2>
            <Delivery entry={new MockDelivery()} />
            <h2>Status</h2>
            <Status>Paket ist unterwegs</Status>
            <p>
              Die Sendung liegt im airlivery Verteilzentrum und wird demnächst
              weitergeleitet.
            </p>
          </React.Fragment>
        )}
      </Main>
    )
  }
}
