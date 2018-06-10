import React from 'react'
import styled, { css } from 'styled-components'

const HeroContainer = styled.div`
  width: 100%;
  height: 55vh;
  position: relative;
  overflow: hidden;
`
const HeroImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(229, 229, 229, 0.35) center / cover no-repeat;
  background-blend-mode: lighten;
  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `};
`
const HeroTitleContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`
const HeroTitle = styled.p`
  color: #fff;
  font-size: 2.5rem;
  text-align: right;
`

export default ({ image, title, subtitle }) => (
  <HeroContainer>
    <HeroImage image={image} />

    {title && (
      <HeroTitleContainer className="max-width">
        <HeroTitle>
          {title}
          <br />
          {subtitle}
        </HeroTitle>
      </HeroTitleContainer>
    )}
  </HeroContainer>
)
