import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledButton = styled(Button)`
  && {
    position: fixed;
    right: 23px;
    bottom: 79px;
    z-index: 2;
  }
`

export default ({ children, ...props }) => (
  <StyledButton variant="fab" color="primary" {...props}>
    {children}
  </StyledButton>
)
