import React from 'react'
import styled from 'styled-components'
import withTheme from '@mui/styles/withTheme'

const StyledButton = withTheme(styled.button`
  background: none;
  border: none;
  color: currentColor;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.palette.primary.main};
  }
`)

export default function Button({ onClick, children, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}
