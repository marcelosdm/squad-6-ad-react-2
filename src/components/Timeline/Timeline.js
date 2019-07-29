import React from 'react'
import { Section, Container } from './styles'
import Card from '../Card/Card'

export default function Timeline ({ data }) {
  return (
    <Section>
      <Container>
        {data.map(repo => (
          <Card key={repo.name} data={repo} />
        ))}
      </Container>
    </Section>
  )
}
