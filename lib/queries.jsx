import { gql } from "@apollo/client";

export const query = gql`
  query MyQuery {
    blogsConnection {
      edges {
        node {
          excerpt
          categories {
            slug
            name
          }
          content {
            html
          }
          featuredBlog
          id
          slug
          thumbnail {
            url
          }
          title
          author {
            bio
            name
            photo {
              url
            }
          }
          updatedAt
        }
      }
    }
  }
`;
