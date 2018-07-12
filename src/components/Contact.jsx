import React from 'react'
import styled from 'styled-components'
import UserImage from './UserImage'

const StyledContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  transition: outline-color 0.25s ease-out;
  outline: 2px solid #d7d7d7;
  background: #f0f0f0;
`
const UserName = styled.p`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  > span {
    font-weight: bold;
  }
`
const Image = styled(UserImage)`
  max-width: 4rem;
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
      <Image image={image} />
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
