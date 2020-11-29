import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Layout from './components/Layout';

const client = new ApolloClient({
  // uri: `wss://${process.env.REACT_APP_HASURA_ENDPOINT}`,
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
