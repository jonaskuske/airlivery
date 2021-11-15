import React from 'react'
import styled from 'styled-components'

const StyledErrorCount = styled.p`
  width: 100%;
  text-align: right;
  font-size: 0.8rem;
  margin-bottom: 0;
  height: 1rem;
`

export default function ErrorCount({ errors }) {
  if (!errors || errors.length < 2) {
    return <StyledErrorCount />
  }

  return <StyledErrorCount>+{errors.length - 1} weitere</StyledErrorCount>
}
