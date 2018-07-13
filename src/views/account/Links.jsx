import React from 'react'
import styled, { css } from 'styled-components'
import { withTheme } from '@material-ui/core'
import { Link } from 'react-router-dom'

const StyledLinkContainer = withTheme()(styled.div`
  display: flex;
  > a {
    margin-right: 0.7rem;
    font-weight: 600;
    ${({ theme }) => css`
      color: ${theme.palette.primary.main};
    `};
  }
  margin: 0.3rem 0 0.7rem 0;
`)

export default props => (
  <StyledLinkContainer>
    <Link to="/adressbuch">Adressbuch</Link>
    <Link to="/lieferungen">Lieferungen</Link>
  </StyledLinkContainer>
)
