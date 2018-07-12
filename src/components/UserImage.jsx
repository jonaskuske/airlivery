import React from 'react'
import styled, { css } from 'styled-components'

import womanImage from '../assets/images/woman.jpg'

const UserImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 4rem;
`
const UserImageInner = styled.div`
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
export default ({ image }) => {
  if (!image) image = womanImage

  return <UserImageInner image={image} />
}
