// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// Style
import './style.css';

// Components
import App from './containers/app';

// Application Config
import registerServiceWorker from './registerServiceWorker';

// Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri:'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
);
registerServiceWorker();
