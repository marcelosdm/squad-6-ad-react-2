import React from 'react'
import { Block, Imagem, Text, Button, Avatar } from './style'

export default function Card () {
  return (
    <Avatar>
      <Block>
        <Imagem />
        <Text>Jorge da Silva Guimarães</Text>
        <Button>Edit profile</Button>
      </Block>
    </Avatar>
  )
}
