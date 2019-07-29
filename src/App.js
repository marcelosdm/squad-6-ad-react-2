import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import Main from './components/Main/Main'
import data from './data/data.json'

const testQuery = gql`
  query {
    viewer {
      login
    }
  }
`

function App () {
  return (
    <div>
      <div className='App'>GitHub React</div>
      <Main data={data} />
    </div>
  )
}

export default graphql(testQuery)(App)
