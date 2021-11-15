import React from 'react'
import styled from 'styled-components'
import store from '../store'

const showError = () =>
  store.dispatch({
    type: 'addError',
    error: {
      message: 'Leider ist ein Fehler aufgetreten.',
      note: 'Dies ist nur ein Test. Du kannst diese Meldung mit gutem Gewissen ignorieren.',
    },
  })

const HeroContainer = styled.div`
  width: 100%;
  height: 55vh;
  position: relative;
  overflow: hidden;
  transition: height 300ms ease-out;
  @media screen and (max-width: 900px) {
    height: 25vh;
  }
`
const HeroImageDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #f0f0f0 center / cover no-repeat;
  background-image: url(${({ image }) => image || 'none'});
`
const HeroTitleContainer = styled.div`
  && {
    position: absolute;
    bottom: 45%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    transition: bottom 250ms ease-out;
    @media screen and (max-width: 550px) {
      bottom: 0;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      transition: bottom 250ms ease-out, background 300ms 300ms ease-out,
        backdrop-filter 10ms 300ms;
    }
  }
`
const HeroTitle = styled.p`
  color: #fff;
  font-size: 2.5rem;
  text-align: right;
  margin: 0;
  @media screen and (max-width: 900px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 1.4rem;
  }
`

export default function HeroImage({ image, title, subtitle, smallSubtitle }) {
  return (
    <HeroContainer onClick={showError}>
      <HeroImageDiv image={image} />

      {title && (
        <HeroTitleContainer className="max-width">
          <HeroTitle>
            {title}
            <br />
            <span style={smallSubtitle && { fontSize: '0.9em' }}>
              {subtitle}
            </span>
          </HeroTitle>
        </HeroTitleContainer>
      )}
    </HeroContainer>
  )
}
