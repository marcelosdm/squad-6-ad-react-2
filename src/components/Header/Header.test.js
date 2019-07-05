import 'jest-dom/extend-expect'
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Header from './Header'

afterEach(cleanup)

describe('Header', () => {
  it('should exist', () => {
    const { container } = render(<Header />)
    const [header] = container.getElementsByTagName('header')

    expect(header).toBeInTheDocument()
  })

  it('should have a logo image', () => {
    const { container } = render(<Header />)
    const [logo] = container.getElementsByTagName('img')

    expect(logo).toBeInTheDocument()
  })

  it('should have an input to search for users', () => {
    const { container } = render(<Header />)
    const [input] = container.getElementsByTagName('input')

    expect(input).toBeInTheDocument()
  })
})
