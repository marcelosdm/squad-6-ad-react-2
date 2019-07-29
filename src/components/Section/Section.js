import React from 'react'
import { Main, Content } from './styled'
import Menu from '../Menu/Menu'
import Repositories from '../Repositories/Repositories'

export default function Section () {
  return (
    <Main>
      <Content>
        <Menu />
        <Repositories />
      </Content>
    </Main>
  )
}
