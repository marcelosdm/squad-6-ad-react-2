import React from 'react'
import {
  Box,
  Painned,
  Flex,
  Link,
  Span,
  Description,
  Linguagem,
  Marcador,
  NameLinguagem,
  Date,
  Div
} from './styled'

export default function Repository ({ repository }) {
  return (
    <Box>
      <Painned>
        <Flex>
          <Link>
            <Span>{repository.name}</Span>
          </Link>
        </Flex>
        <Description>{repository.Description} </Description>
        <Div>
          <Linguagem>
            <Marcador />
            <NameLinguagem>{repository.language}</NameLinguagem>
          </Linguagem>
          <Date>{repository.created_data}</Date>
        </Div>
      </Painned>
    </Box>
  )
}
