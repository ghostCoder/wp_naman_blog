import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import Hero from "../components/hero";
import PostPreview from "../components/post-preview";
import Insta from "../components/insta";

export default () => {
  const { posts, pages } = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>

        <div>
          <h1>Pages</h1>
          {pages.map(page => (
            <div key={page.slug}>
              <Link to={page.slug}>
                <h2>{page.title}</h2>
              </Link>
              <h3>{page.excerpt}</h3>
            </div>
          ))}
        </div>

        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
