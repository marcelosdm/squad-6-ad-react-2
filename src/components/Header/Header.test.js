import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should exist', () => {
    const { container } = render(<Header />)
    const app = container.getElementsByTagName('header')

    expect(app).toBeDefined()
  })
})
