import React from 'react'
import styled, { css } from 'styled-components'
import { TextField, withTheme } from '@material-ui/core'

const Main = styled.main`
  display: flex;
  flex-direction: column;
`
const Result = withTheme(styled.p`
  align-self: flex-start;
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    border-bottom: 2px solid ${theme.palette.primary.dark};
  `};
`)
export default class Search extends React.Component {
  state = { query: '' }

  setQuery = ({ target }) => this.setState({ query: target.value })

  render() {
    const { query } = this.state
    return (
      <Main className="max-width">
        <h1>Suche</h1>
        <TextField
          value={query}
          onChange={this.setQuery}
          placeholder="Kontakte, FAQs und mehr durchsuchen"
        />
        {query ? (
          <React.Fragment>
            <Result>Ein Ergebnis :)</Result>
            <Result>Ein Ergebnis :)</Result>
            <Result>Ein Ergebnis :)</Result>
            <Result>Ein Ergebnis :)</Result>
            <Result>Ein Ergebnis :)</Result>
          </React.Fragment>
        ) : (
          <p>Im Suchfeld etwas eingeben, um sofort Ergebnisse zu sehen...</p>
        )}
      </Main>
    )
  }
}
