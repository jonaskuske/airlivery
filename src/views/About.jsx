import React from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/core'
import DocumentTitle from 'react-document-title'

const Main = withTheme(styled.main`
  & h3 {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`)

export default function About() {
  return (
    <DocumentTitle title="About | airlivery">
      <Main className="max-width">
        <h1>About</h1>
        <h2>Wer wir sind</h2>
        <p>
          airlivery ist ein junges Unternehmen, das dabei ist, die Logistikwelt
          zu revolutionieren.
        </p>
        <h3>Innovativ</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, vel.
          Dolor dignissimos quidem ipsum et illo! Nihil nisi, culpa architecto
          ipsum, repellendus eius laborum ratione minima maxime dolorum ad quam?
        </p>
        <h3>Umweltfreundlich</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi
          vero, magnam nisi error aliquam doloribus, quasi distinctio odit
          voluptatum iste totam suscipit accusantium dolorum perspiciatis
          doloremque, ab provident quo.
        </p>
        <h3>Schnell & Bequem</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          ut iure placeat eveniet sunt et? Adipisci, expedita excepturi. Vero
          praesentium sequi vel facilis obcaecati ut beatae ducimus id
          voluptates placeat?
        </p>
      </Main>
    </DocumentTitle>
  )
}
