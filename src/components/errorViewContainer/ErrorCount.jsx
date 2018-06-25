import React from 'react'
import styled from 'styled-components'

const StyledErrorCount = styled.p`
  width: 100%;
  text-align: right;
  font-size: 0.8rem;
  margin-bottom: 0;
`

export default ({ errors }) => {
  if (!errors || !errors.length) return null

  return <StyledErrorCount>+{errors.length} weitere</StyledErrorCount>
}
