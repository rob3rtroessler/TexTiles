import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import Dashboard from './Dashboard'

const store = configureStore(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => (
  <Provider store={store}>
      <Dashboard />
  </Provider>
)

export default App
