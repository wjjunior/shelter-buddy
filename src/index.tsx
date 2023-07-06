import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'
import rootStore from './store/root-store'

ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
