import React from 'react'
import styled, { css } from 'styled-components'

const HeroContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  overflow: hidden;
  transition: height 300ms ease-out;
  @media screen and (max-width: 900px) {
    height: 25vh;
  }
`
const HeroImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #f0f0f0 center / cover no-repeat;
  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `};
`
const HeroTitleContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`
const HeroTitle = styled.p`
  color: #fff;
  font-size: 2.5rem;
  text-align: right;
  margin: 0;
  @media screen and (max-width: 900px) {
    font-size: 1.9rem;
  }
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
