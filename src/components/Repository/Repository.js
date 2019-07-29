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
  NameLinguagem
} from './styled'

export default function Repository () {
  return (
    <Box>
      <Painned>
        <Flex>
          <Link>
            <Span>Lara-rest</Span>
          </Link>
        </Flex>
        <Description />
        <Linguagem>
          <Marcador />
          <NameLinguagem>PHP</NameLinguagem>
        </Linguagem>
      </Painned>
    </Box>
  )
}
