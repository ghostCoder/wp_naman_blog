import { graphql, useStaticQuery } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage {
        edges {
          node {
            id
            title
            excerpt
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            title
            excerpt
            slug
          }
        }
      }
    }
  `);

  return {
    pages: data.allWordpressPage.edges.map(({ node }) => ({
      title: node.title,
      slug: node.slug,
      excerpt: node.excerpt
    })),
    posts: data.allWordpressPost.edges.map(({ node }) => ({
      title: node.title,
      slug: node.slug,
      excerpt: node.excerpt
    }))
  };
};

export default usePosts;
