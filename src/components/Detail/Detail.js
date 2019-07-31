import React from 'react'
import { Container, Sumary, Span, Ul, Li } from './style'

export default function Detail () {
  return (
    <Container>
      <Sumary>
        Tipe : <Span>All</Span>
      </Sumary>
      <Ul>
        <Li>All</Li>
        <Li>Public</Li>
        <Li>Private</Li>
      </Ul>
    </Container>
  )
}
