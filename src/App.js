import React from 'react'
// import { gql } from 'apollo-boost'
// import { graphql } from 'react-apollo'
import Main from './components/Main/Main'
import data from './data/data.json'
import { BrowserRouter as Router } from 'react-router-dom'

// const testQuery = gql`
//   query {
//     viewer {
//       login
//     }
//   }
// `

function App () {
  return (
    <Router>
      <div>
        <div className='App'>GitHub React</div>
        <Main {...data} />
      </div>
    </Router>
  )
}

export default App
