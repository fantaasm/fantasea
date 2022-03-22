import graphql from "graphql.js";

const graph = graphql(process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT!, {
  asJSON: true,
});

export const getPosts = async () => {
  const query = await graph.query.run(`
  {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              username
              id
              picture {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `);

  return query.postsConnection.edges;
};

export const getProjects = async () => {
  const query = await graph.query.run(`
     {
      projects {
        title
        description
        slug
        technologies {
          name
          color {
            hex
          }
        }
        category {
          name
        }
        picture {
          url
        }
      }
    }
  `);

  return query.projects;
};

export const getPostDetails = async (slug: string) => {
  const query = graph.query(
    `($slug: String!, $path: String!) {
      posts(where: { slug_starts_with: $path }) {
        title
        slug
      }
      post(where: { slug: $slug }) {
        title
        headerTitle
        excerpt
        featuredImage {
          url
        }
        author {
          username
          bio
          picture {
            url
          }
        }
        createdAt
        slug
        content {
          html
        }
        categories {
          name
          slug
        }
      }
    }
  `
  );
  return await query({ slug, path: slug.split("/")[0] });
};
