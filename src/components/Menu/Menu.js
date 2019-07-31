import React from 'react'
// import { Link } from 'react-router-dom'
import { Nav, Word, Span, DivBotao, StyledLink } from './style'

export default function Menu () {
  return (
    <Nav>
      <StyledLink to='/overview'>
        <DivBotao>
          <Word>Overview</Word>
        </DivBotao>
      </StyledLink>
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
