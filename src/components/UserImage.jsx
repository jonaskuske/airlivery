import React from 'react'
import styled, { css } from 'styled-components'

import defaultAvatar from '../assets/images/generic-user.png'

const StyledUserImage = styled.div`
  position: relative;
  width: 100%;
  ::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`
const StyledUserImageInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent center / cover no-repeat;
    ${({ image }) => css`
      background-image: url(${image});
    `} border-radius: 50%;
  }
`
export default ({ image, ...props }) => {
  if (!image) image = defaultAvatar

  return (
    <StyledUserImage {...props}>
      <StyledUserImageInner image={image} />
    </StyledUserImage>
  )
}
