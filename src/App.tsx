import React from 'react';
import ApolloClient, { HttpLink, split, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { createHttpLink } from 'apollo-link-http';
import Layout from './components/Layout';


// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: 'ws://slack-clone.hasura.app/v1/graphql',
  options: {
    reconnect: true,
  },
});

// Create an http link:
const httpLink = createHttpLink({
  uri: 'https://slack-clone.hasura.app/v1/graphql',
});

interface Definintion {
  kind: string;
  operation?: string;
}

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation }: Definintion = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
    
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  uri: 'https://slack-clone.hasura.app/v1/graphql',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Layout />
      </div>
    </ApolloProvider>
  );
};

export default App;
