import React from 'react'
import styled, { css } from 'styled-components'

import womanImage from '../assets/images/woman.jpg'

const StyledContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
    background-image: url(${image || womanImage});
  `} border-radius: 50%;
  ::before {
    content: '';
    display: block;
    margin-top: 100%;
  }
`
const UserImage = () => (
  <UserImageWrapper>
    <UserImageInner />
  </UserImageWrapper>
)
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

export default props => {
  return (
    <StyledContact>
      <UserImage />
      <UserName>
        <span>Name</span>Anita Havering
      </UserName>
      <UserAdress>
        <span>Adresse</span>
        <span>Gasstraße 5</span>
        <span>27568 Bremerhaven</span>
      </UserAdress>
    </StyledContact>
  )
}
