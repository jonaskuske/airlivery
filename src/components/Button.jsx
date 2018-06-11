import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: none;
  border: none;
  color: currentColor;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    text-decoration-color: #6eaffb;
  }
`

export default ({ onClick, children, ...props }) => (
  <Button onClick={onClick} {...props}>
    {children}
  </Button>
)
