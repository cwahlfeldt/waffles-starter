//
// Query extended @TODO outta commission dude

import * as React from 'react';
import { Query } from 'react-apollo';

class QueryEx extends React.Component {
  render() {
    return (
      <Query query={this.props.query}>
        {({ loading, error, data }) => {
          if (loading) { return <p>Loading...</p>; }
          if (error) { return <p>Error :(</p>; }

          return React.Children.map(this.props.children, (child) => {
            React.cloneElement(child, { data });
          });
        }}
      </Query>
    );
  }
}

export default QueryEx;
