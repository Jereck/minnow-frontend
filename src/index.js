import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
<<<<<<< HEAD
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
=======
import { ApolloProvider } from '@apollo/client'
>>>>>>> 872de46814896143ed94ccc0b79d257efb09351f
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import { Provider } from 'react-redux'
import { clientNest } from './graphql'


const initApp = (root, query) => {
  store.dispatch({ type: 'SET_CONTEXT', payload: {} })

  return store
}

const _store = initApp()

ReactDOM.render(
  <Provider store={_store}>
  <ApolloProvider client={clientNest}>
    <App />
  </ApolloProvider>
  </Provider>,
document.getElementById('root'));
