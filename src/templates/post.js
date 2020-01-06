import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import ReadLink from "../components/read-link";

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

const PostTemplate = ({ data: { wordpressPost: post } }) => (
  <Layout>
    <h1>{post.title}</h1>
    <div>{post.content}</div>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
};

export default PostTemplate;
/*
<p
  css={css`
    font-size: 0.75rem;
  `}
>
  Posted by {post.frontmatter.author}
</p>;
*/
