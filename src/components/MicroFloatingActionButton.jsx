import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledButton = styled(Button)`
  && {
    width: 28px;
    height: 28px;
    min-height: 0;
  }
  & svg {
    font-size: 17px;
  }
`

export default ({ children, ...props }) => (
  <StyledButton variant="fab" mini {...props}>
    {children}
  </StyledButton>
)
