import React from 'react'
import { Button } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import styled from 'styled-components'

const StyledEditButton = styled(Button)`
  && {
    position: fixed;
    right: 23px;
    bottom: 79px;
    z-index: 2;
  }
`

export default props => (
  <StyledEditButton variant="fab" color="primary" {...props}>
    <Edit />
  </StyledEditButton>
)
