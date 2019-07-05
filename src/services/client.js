import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
})

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
