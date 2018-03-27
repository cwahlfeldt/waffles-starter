import gql from 'graphql-tag';

export const GET_PAGES = gql`
  query myQuery {
    pages {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query myQuery {
    posts {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
