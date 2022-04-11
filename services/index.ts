// @ts-ignore
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
          width
          height
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
        contentLinks
        seoTitle
      }
    }
  `
  );
  return await query({ slug, path: slug.split("/")[0] });
};

export const getRecentPosts = async (amount: number) => {
  const query = graph.query(
    `($amount: Int!) {
      postsConnection(first: $amount, orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
            createdAt
            headerTitle
            title
            slug
            excerpt
            readTime
            categories {
              name
              slug
            }
            featuredImage {
              url(transformation: {image: {resize: {fit: crop, height: 220, width: 672}}})
            }
          }
        }
      }
    }
    `
  );
  return await query({ amount });
};
