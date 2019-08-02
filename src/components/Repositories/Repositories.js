import React from 'react'
import {
  Container,
  DivTitle,
  DivBusca,
  Form,
  InputText,
  SpanButton,
  Repos,
  H2,
  SelectType,
  OptionType
} from './style'
import Repository from '../Repository/Repository'

export default function Repositories () {
  return (
    <Container>
      <DivTitle>
        <H2>Repositories</H2>
      </DivTitle>
      <DivBusca>
        <Form>
          <InputText />
          <SelectType>
            <OptionType>All</OptionType>
            <OptionType>PHP</OptionType>
            <OptionType>JavaScript</OptionType>
            <OptionType>Html</OptionType>
          </SelectType>
          <SpanButton>New</SpanButton>
        </Form>
      </DivBusca>
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
