import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import { Provider } from 'react-redux'

// const keystoneClientConnector = new ApolloClient({
//   uri: 'http://localhost:3000/graphql',
//   cache: new InMemoryCache()
// })

const nestClientConnector = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
  cache: new InMemoryCache()
})


console.log('nestClientConnector', nestClientConnector)

const initApp = (root, query) => {
  store.dispatch({ type: 'SET_CONTEXT', payload: {} })
  // store.dispatch(setDefaultProps(window.__env))

  // todo find a better way to redirect to advanced mode
  // if (window.__env.isComplex) store.dispatch(setAdvancedMode(true))

  return store
}

const _store = initApp()

ReactDOM.render(
  <Provider store={_store}>
  <ApolloProvider client={nestClientConnector}>
    <App />
  </ApolloProvider>
  </Provider>,
document.getElementById('root'));
