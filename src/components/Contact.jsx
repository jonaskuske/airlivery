import React from 'react'
import styled, { css } from 'styled-components'

import womanImage from '../assets/images/woman.jpg'

const StyledContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  transition: outline-color 0.25s ease-out;
  outline: 2px solid #d7d7d7;
  background: #f0f0f0;
`
const UserImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 4rem;
`
const UserImageInner = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  background: transparent center / cover no-repeat;
  ${({ image }) => css`
    background-image: url(${image});
  `} border-radius: 50%;
  ::before {
    content: '';
    display: block;
    margin-top: 100%;
  }
`
const UserImage = ({ image }) => {
  if (!image) image = womanImage

  return (
    <UserImageWrapper>
      <UserImageInner image={image} />
    </UserImageWrapper>
  )
}
const UserName = styled.p`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  > span {
    font-weight: bold;
  }
`
const UserAdress = styled.p`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  > span:first-of-type {
    font-weight: bold;
  }
`

export default ({ contact }) => {
  const { name, adress, image } = contact
  return (
    <StyledContact>
      <UserImage image={image} />
      <UserName>
        <span>Name</span>
        {name}
      </UserName>
      <UserAdress>
        <span>Adresse</span>
        <span>
          {adress.street} {adress.streetNumber}
        </span>
        <span>
          {adress.plz} {adress.city}
        </span>
      </UserAdress>
    </StyledContact>
  )
}
