import React from 'react'
import { Button } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import styled from 'styled-components'

const StyledEditButton = styled(Button)`
  && {
    position: fixed;
    right: 23px;
    bottom: 79px;
  }
`

export default props => (
  <StyledEditButton variant="fab" color="secondary" {...props}>
    <Edit />
  </StyledEditButton>
)
