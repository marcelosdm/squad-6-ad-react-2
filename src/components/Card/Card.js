import React from 'react'
import { Block, Imagem, Text, Link, Button, Avatar } from './style'

export default function Card () {
  return (
    <Avatar>
      <Block>
        <Link>
          <Imagem />
        </Link>
        <Text>Jorge da Silva Guimarães jorgesilvaguimaraes@gmail.com</Text>

        <Button>Edit profile</Button>
      </Block>
    </Avatar>
  )
}
