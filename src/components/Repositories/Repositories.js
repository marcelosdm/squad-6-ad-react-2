import React from 'react'
import {
  Container,
  Title,
  Busca,
  Form,
  Input,
  ButtonNew,
  Repos,
  H2
} from './style'
import Repository from '../Repository/Repository'
import Detail from '../Detail/Detail'

export default function Repositories () {
  return (
    <Container>
      <Title>
        <H2>Repositories</H2>
      </Title>
      <Busca>
        <Form>
          <Input />
          <Detail />
          <Detail />
          <ButtonNew>New</ButtonNew>
        </Form>
      </Busca>
      <Repos>
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
      </Repos>
    </Container>
  )
}
