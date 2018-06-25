import React from 'react'
import styled, { css } from 'styled-components'

const Icon = styled.a`
  margin: 0 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  ${props => css`
    background-color: ${props.color || 'grey'};
  `};
  :hover {
    text-decoration: none;
  }
`

export default props => (
  <Icon href={props.href || '/#'} color={props.color}>
    {props.children}
  </Icon>
)
