import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger }  from 'redux-logger'
import reducer  from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import sagas  from './sagas'


const shouldLog = ['development'].includes(process.env.NODE_ENV)

const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: (getState, action) => shouldLog
})


export const makeStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
      reducer,
      {},
    compose(
      composeWithDevTools(
        applyMiddleware(
          loggerMiddleware,
          sagaMiddleware)
        )
    )
  )

  const sagasCombined = [
    ...sagas
  ]
  sagasCombined.forEach((saga) => sagaMiddleware.run(saga, store.dispatch))
  return store
}

let _store

const store = () => {
  if (!_store) {
    const initialState = {}
    _store = makeStore(initialState)
  }
  return _store
}

export default store()