import React from 'react'

import { Nav, Word, Span, DivBotao } from './style'

export default function Menu () {
  return (
    <Nav>
      <DivBotao>
        <Word>Overview</Word>
      </DivBotao>
      <DivBotao>
        <Word>Repositories</Word>
        <Span>14</Span>
      </DivBotao>
      <DivBotao>
        <Word>Projectes</Word>
        <Span>1</Span>
      </DivBotao>
      <DivBotao>
        <Word>Start</Word>
        <Span>0</Span>
      </DivBotao>
      <DivBotao>
        <Word>Followers</Word>
        <Span>0</Span>
      </DivBotao>
      <DivBotao>
        <Word>Following</Word>
        <Span>0</Span>
      </DivBotao>
    </Nav>
  )
}
