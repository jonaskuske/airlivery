import React from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/core'
import { Link } from 'react-router-dom'

const StyledLinkContainer = withTheme(styled.div`
  display: flex;
  > a {
    margin-right: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  margin: 0.7rem 0 1.2rem 0;
`)

export default function Links(props) {
  return (
    <StyledLinkContainer>
      <Link to="/adressbuch">Zum Adressbuch</Link>
      <Link to="/lieferungen">Zur Lieferübersicht</Link>
    </StyledLinkContainer>
  )
}
