import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const testQuery = gql`
  query {
    viewer {
      login
    }
  }
`

function App () {
  return <div className='App'>GitHub React</div>
}

export default graphql(testQuery)(App)
