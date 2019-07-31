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

export default function Repository () {
  return (
    <Box>
      <Painned>
        <Flex>
          <Link>
            <Span>Lara-rest</Span>
          </Link>
        </Flex>
        <Description>
          asdfajlkasdfasdfasdfjafdjasfj asdfkjasdfaçldsfjadfsadf
          asdflkjsfdaksjdfaçsdfjkç
        </Description>
        <Div>
          <Linguagem>
            <Marcador />
            <NameLinguagem>PHP</NameLinguagem>
          </Linguagem>
          <Date>01/01/2019</Date>
        </Div>
      </Painned>
    </Box>
  )
}
