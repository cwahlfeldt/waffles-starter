import * as React from 'react';
import { Query } from 'react-apollo';
//import gql from 'graphql-tag';
import App from '../layouts/App';
import { GET_POSTS } from '../common/queries.js';

class Home extends React.Component {
  render() {
    return (
      <App>
        <Query query={GET_POSTS}>
          {({ loading, error, data }) => {
            if (loading) { return <p>Loading...</p>; }
            if (error) { return <p>Error :(</p>; }

            return (
              <h1>{data.posts.edges[0].node.title}</h1>
            );
          }}
        </Query>
      </App>
    );
  }
}

export default Home;
