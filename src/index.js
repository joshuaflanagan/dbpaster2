import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'src/configureStore'

const store = configureStore()

const rootEl = document.getElementById('example')

let render = () => {
  const App = require('src/app.jsx').default
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )
}

// Hot reloading without transforms/react-hmre
// https://github.com/reactjs/redux/pull/1455
if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept('src/app.jsx', () => {
    setTimeout(render)
  })
}

render()
