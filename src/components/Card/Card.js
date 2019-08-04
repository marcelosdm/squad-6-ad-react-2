import React from 'react'
import { DivBlock, Avatar, Name, EditProfile, DivContainer } from './style'

export default function Card () {
  return (
    <DivContainer>
      <DivBlock>
        <Avatar />
        <Name>Jorge da Silva Guimarães</Name>
        <Username />
        <EditProfile>Edit profile</EditProfile>
        <Location />
      </DivBlock>
    </DivContainer>
  )
}
