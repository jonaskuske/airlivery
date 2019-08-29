import React from 'react'
import styled, { css } from 'styled-components'
import { withTheme } from '@material-ui/core'

const RadioGroup = styled.form`
  margin: 0;
  display: flex;
  justify-content: space-between;
`

const RadioLabel = styled.label`
  flex-basis: 100%;
  border-bottom: 2px solid #707070;
  cursor: pointer;
  padding: 0 1rem;
  border-right: 1px solid #707070;
  :last-of-type {
    border-right: none;
  }
`

const RadioInput = withTheme(styled.input`
  display: none;
  :checked + label {
    ${({ theme }) => css`
      color: ${theme.palette.primary.main};
      border-bottom: 4px ${theme.palette.primary.main} solid;
    `};
  }
`)

export default class DeliveryListFilter extends React.Component {
  render() {
    return (
      <section>
        <header>
          <RadioGroup method="post">
            <RadioInput
              type="radio"
              name="deliveries"
              id="deliveries-all"
              defaultChecked
              onChange={() => this.props.onChange('all')}
            />
            <RadioLabel htmlFor="deliveries-all">Alle</RadioLabel>
            <RadioInput
              type="radio"
              name="deliveries"
              id="deliveries-to"
              onChange={() => this.props.onChange('to')}
            />
            <RadioLabel htmlFor="deliveries-to">Zu mir</RadioLabel>
            <RadioInput
              type="radio"
              name="deliveries"
              id="deliveries-from"
              onChange={() => this.props.onChange('from')}
            />
            <RadioLabel htmlFor="deliveries-from">Von mir</RadioLabel>
          </RadioGroup>
        </header>
      </section>
    )
  }
}
