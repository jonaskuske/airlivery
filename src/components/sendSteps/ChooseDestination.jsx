import React from 'react'
import styled, { css } from 'styled-components'

import womanImage from '../../assets/images/woman.jpg'

const StyledInput = styled.input`
  display: none;
  :checked + label {
    border: 1px solid blue;
  }
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
const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export default props => {
  return (
    <div>
      <h2>Empfänger auswählen</h2>
      <form>
        <StyledInput type="radio" name="lalala" id="i1" defaultChecked />
        <StyledLabel htmlFor="i1">
          <UserImage />
          <UserName>
            <span>Name</span>Anita Havering
          </UserName>
          <UserAdress>
            <span>Adresse</span>
            <span>Gasstraße 5</span>
            <span>27568 Bremerhaven</span>
          </UserAdress>
        </StyledLabel>
        <br />
        <StyledInput type="radio" name="lalala" id="i2" />
        <StyledLabel htmlFor="i2">
          <UserImage />
          <UserName>
            <span>Name</span>Anita Havering
          </UserName>
          <UserAdress>
            <span>Adresse</span>
            <span>Gasstraße 5</span>
            <span>27568 Bremerhaven</span>
          </UserAdress>
        </StyledLabel>
        <br />
        <StyledInput type="radio" name="lalala" id="i3" />
        <StyledLabel htmlFor="i3">
          <UserImage />
          <UserName>
            <span>Name</span>Anita Havering
          </UserName>
          <UserAdress>
            <span>Adresse</span>
            <span>Gasstraße 5</span>
            <span>27568 Bremerhaven</span>
          </UserAdress>
        </StyledLabel>
        <br />
        <StyledInput type="radio" name="lalala" id="i4" />
        <StyledLabel htmlFor="i4">
          <UserImage />
          <UserName>
            <span>Name</span>Anita Havering
          </UserName>
          <UserAdress>
            <span>Adresse</span>
            <span>Gasstraße 5</span>
            <span>27568 Bremerhaven</span>
          </UserAdress>
        </StyledLabel>
        <br />
      </form>
    </div>
  )
}
