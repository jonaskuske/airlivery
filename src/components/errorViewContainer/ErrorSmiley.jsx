import React from 'react'
import styled from 'styled-components'
import SadFace from '../icons/SadFace'

const StyledErrorSmily = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0 2rem 0;
  @media screen and (max-width: 900px) {
    padding: 1.5rem 0 0.5rem 0;
  }
  > svg {
    width: 25%;
    height: 100%;
    max-width: 100px;
  }
`

export default function ErrorSmiley() {
  return (
    <StyledErrorSmily>
      <SadFace />
    </StyledErrorSmily>
  )
}
