import { gql } from "@apollo/client";
// import { useQuery } from "@apollo/client";

// export function getBlogs () {
  export const query = gql`
    query MyQuery {
      blogsConnection {
        edges {
          node {
            excerpt
            createdAt
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
          }
        }
      }
    }
  `;

  // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { data } = useQuery(query);

//   return data;
// }
