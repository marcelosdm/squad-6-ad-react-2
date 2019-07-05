import { ApolloClient, InMemoryCache } from 'apollo-boost'

const client = new ApolloClient({
  link: 'https://api.github.com/graphql',
  cache: new InMemoryCache()
})

export default client
