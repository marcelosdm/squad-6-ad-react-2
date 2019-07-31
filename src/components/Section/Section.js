import React from 'react'
import { Main, Content } from './styled'
import Repositories from '../Repositories/Repositories'

export default function Section () {
  return (
    <Main>
      <Content>
        <Repositories />
      </Content>
    </Main>
  )
}
