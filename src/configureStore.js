import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger';
import rootReducer from 'src/reducers'

export default function configureStore(initialState) {
  const logger = createLogger({
    collapsed: true
  })

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // https://github.com/reactjs/redux/pull/1455
    module.hot.accept('src/reducers', () => {
      const nextRootReducer = require('src/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
