import React from 'react'

import { ButtonNew, Div, Head, Img, Input, Label, MenuLink } from './styles'

import logo from './assets/logo.svg'
import slash from './assets/search-key-slash.svg'

function Header () {
  return (
    <Head>
      <Div>
        <MenuLink href='#'>
          <Img logo src={logo} alt={'Github logo'} />
        </MenuLink>
      </Div>

      <Div links>
        <Label>
          <Input placeholder='Search or jump to...' />
          <Img src={slash} alt={'Slash bar'} />
        </Label>

        <MenuLink>Pull Requests</MenuLink>
        <MenuLink>Issues</MenuLink>
        <MenuLink>Marketplace</MenuLink>
        <MenuLink>Explore</MenuLink>
      </Div>

      <ButtonNew type='button'>➕ New</ButtonNew>
    </Head>
  )
}

export default Header
