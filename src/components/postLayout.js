import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import styled from "styled-components";

const StyledPost = styled.div`
  box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: 15px;
  border-radius: 10px;
`;

const PostLayout = props => {
  const {
    location,
    data: { markdownRemark }
  } = props;
  return (
    <Layout location={location}>
      <StyledPost>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </StyledPost>
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        slug
      }
      html
      excerpt
    }
  }
`;

export default PostLayout;
