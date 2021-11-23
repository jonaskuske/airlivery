import React from 'react'
import styled from 'styled-components'
import withTheme from '@mui/styles/withTheme'

const Subtitle = withTheme(styled.h2`
  color: ${({ theme }) => theme.palette.primary.main};
`)

export default function Help() {
  return (
    <main className="max-width">
      <h1>Hilfe</h1>
      <Subtitle>So funktioniert es</Subtitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, et
        voluptas accusantium, enim illum at nostrum fuga ipsa quas commodi
        necessitatibus a! Aspernatur error laboriosam excepturi, ipsa illo
        necessitatibus sed?
      </p>
      <Subtitle>Das kostet es</Subtitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est soluta
        dolor unde maxime. Aspernatur explicabo quos fugiat fugit dignissimos
        itaque architecto repellat facilis quasi, ea, dicta nam molestiae sequi?
      </p>
      <Subtitle>Was passiert, wenn die Drohne nicht Landen kann?</Subtitle>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        impedit sunt tempora pariatur sed corporis non esse perferendis
        molestias nostrum eaque, quas vel eos voluptatem quibusdam consequuntur
        odio repellat ipsam.
      </p>
      <Subtitle>FAQ</Subtitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        provident nostrum? Est, facere pariatur! Dolorem molestiae, culpa non
        sequi fugiat laudantium libero neque. Voluptatem dignissimos, dolor non
        consequuntur quisquam facere?
      </p>
    </main>
  )
}
