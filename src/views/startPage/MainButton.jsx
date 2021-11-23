import React from 'react'
import styled from 'styled-components'
import IconLink from '../../assets/icons/link.svg'
import withTheme from '@mui/styles/withTheme'

const ButtonContainer = styled.div`
  width: 100%;
  cursor: pointer;
  :hover > button {
    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.3);
  }
`

const Button = withTheme(styled.button`
  position: relative;
  width: 100%;
  border: none;
  margin: 0;
  padding: 15%;
  cursor: pointer;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.3);
  background: #eeeeee center / contain no-repeat;
  background-origin: content-box;
  overflow: hidden;
  ::before {
    content: '';
    display: block;
    margin-top: 100%;
  }
  @media (max-width: 900px) {
    padding: 3%;
    ::before {
      margin-top: 15%;
    }
  }
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    padding-top: 150%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.15);
    opacity: 0;
    transition: transform 350ms ease-out, opacity 280ms ease-out;
    background: ${({ theme }) => theme.palette.primary.main};
  }
  :active::after {
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(1);
  }
  background-image: url(${({ image }) => image || IconLink});
`)

const ButtonText = withTheme(styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin: 0.2rem 0 0.5rem 0;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
  color: ${({ theme }) => theme.palette.primary.main};
`)

export default function MainButton({
  onClick,
  text = 'Main Button',
  ...props
}) {
  return (
    <ButtonContainer onClick={onClick} title={text}>
      <Button aria-label={text} {...props} />
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}
