import React from 'react'
import { Div1, Div2, H2 } from './style'
import Repository from '../Repository/Repository'

export default function Repositories () {
  return (
    <Div1>
      <Div2>
        <H2>Popular repositories</H2>
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
      </Div2>
    </Div1>
  )
}
