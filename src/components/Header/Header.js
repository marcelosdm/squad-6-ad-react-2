import React from 'react'

import { Head, Img, Label, Input } from './styles'

import logo from './assets/logo.svg'
import slash from './assets/search-key-slash.svg'

function Header () {
  return (
    <Head>
      <a href='#'>
        <Img logo src={logo} alt={'Github logo'} />
      </a>

      <Label>
        <Input placeholder='Search or jump to...' />
        <Img src={slash} alt={'Slash bar'} />
      </Label>
    </Head>
  )
}

export default Header
