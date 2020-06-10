import React from 'react'
import styled from 'styled-components'
import UserImage from './UserImage'
import { Delete, Add } from '@material-ui/icons'
import ActionButton from '../components/MicroFloatingActionButton'

const StyledContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem 0 1rem;
  transition: outline-color 0.25s ease-out;
  outline: 2px solid #d7d7d7;
  background: #f0f0f0;
  position: relative;
`
const InteractionHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.4rem;
`
const StyledUserImage = styled(UserImage)`
  align-self: center;
  max-width: 4rem;
`
const UserName = styled.p`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  > span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > span:first-child {
    font-weight: bold;
  }
`
const UserAdress = styled.p`
  flex: 1.5;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  > span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > span:first-child {
    font-weight: bold;
  }
`
const DeleteButton = styled(ActionButton)`
  && {
    background-color: red;
    color: #fafafa;
  }
`

export default ({ contact, onDelete, onAdd, allowInteractions, ...props }) => {
  const { name, adress, image } = contact
  return (
    <StyledContact {...props}>
      {allowInteractions && (
        <InteractionHeader>
          {onAdd && (
            <ActionButton onClick={() => onAdd(contact)} color="secondary">
              <Add />
            </ActionButton>
          )}
          {onDelete && (
            <DeleteButton onClick={() => onDelete(contact)} color="inherit">
              <Delete />
            </DeleteButton>
          )}
        </InteractionHeader>
      )}
      <StyledUserImage image={image} />
      <UserName>
        <span>Name</span>
        <span>{name}</span>
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
