import React from 'react'
import styled, { css } from 'styled-components'

const ButtonContainer = styled.div`
  width: 100%;
  cursor: pointer;
  :hover > button {
    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.3);
  }
`

const Button = styled.button`
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.3);
  background: #eeeeee 50% 20% / contain no-repeat;
  ${props => css`
    background-image: url(${props.image});
  `} ::before {
    content: '';
    display: block;
    margin-top: 100%;
  }
`

const ButtonText = styled.p`
  color: #6eaffb;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0.5rem 0;
`

export default ({ image, text, onClick }) => (
  <ButtonContainer onClick={onClick}>
    <Button image={image} aria-label={text} />
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
)
