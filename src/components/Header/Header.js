import React from 'react'

import {
  Anchor,
  ButtonNew,
  Div,
  Head,
  Img,
  Input,
  Label,
  Li,
  MenuLink,
  Span,
  Ul
} from './styles'

import logo from './assets/logo.svg'
import slash from './assets/search-key-slash.svg'
import repository from './assets/repository.svg'

function SearchRepositories () {
  return (
    <Ul>
      <Li>
        <Anchor>
          <Img src={repository} />
          <Span repository>user/repository-name</Span>
          <Span jump>Jump to ↵</Span>
        </Anchor>
      </Li>
      <Li>
        <Anchor>
          <Img src={repository} />
          <Span repository>user/repository-name</Span>
          <Span jump>Jump to ↵</Span>
        </Anchor>
      </Li>
      <Li>
        <Anchor>
          <Img src={repository} />
          <Span repository>user/repository-name</Span>
          <Span jump>Jump to ↵</Span>
        </Anchor>
      </Li>
    </Ul>
  )
}

function Search (props) {
  const isSearching = props.isSearching
  if (isSearching) {
    return <SearchRepositories />
  }
  return ''
}

function Header () {
  return (
    <Head>
      <Div>
        <MenuLink href='#'>
          <Img logo src={logo} alt={'Github logo'} />
        </MenuLink>
      </Div>

      <Div links>
        <Div input>
          <Label>
            <Input placeholder='Search or jump to...' />
            <Img src={slash} alt={'Slash bar'} />
          </Label>
          <Search isSearching={true} />
        </Div>

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
