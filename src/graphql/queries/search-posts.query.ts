import gql from "graphql-tag";

const SEARCH_POSTS_QUERY = gql`
  query searchPostsQuery($searchValue: String!) {
    posts(where: { search: $searchValue }) {
      edges {
        node {
          postId
          title
          date
          author {
            name
          }
        }
      }
    }
  }
`;

export default SEARCH_POSTS_QUERY;
