import { ApolloProvider } from '@apollo/client'
import { Provider } from 'mobx-react'
import ReactDOM from 'react-dom'

import { apolloClient } from './api/apolloClient'
import App from './App'
import reportWebVitals from './reportWebVitals'
import rootStore from './store/root-store'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider rootStore={rootStore}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
)

reportWebVitals()
