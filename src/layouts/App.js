import * as React from 'react';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import * as Config from '../common/config';

const client = new ApolloClient({
  uri: Config.devGraphqlURI,
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <section className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          {this.props.children}
        </section>
      </ApolloProvider>
    );
  }
}

export default App;
