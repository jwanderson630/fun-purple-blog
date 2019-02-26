import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const POST_ARCHIVE_QUERY = graphql`
  query PostArchiveQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const StyledAside = styled.aside`
  border-radius: 10px;
  background-color: rgba(102, 51, 153, 0.05);
  padding: 15px;
  position: sticky;
  top: 123px;
  margin-bottom: 20px;
  h3 {
    color: rebeccapurple;
    margin-bottom: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 10px 0;
    border-top: 1px solid rgba(102, 51, 153, 0.1);
  }
  li {
    border-bottom: 1px solid rgba(102, 51, 153, 0.1);
    margin: 0;
    padding: 5px;
  }
  a {
    color: #3d3d3d;
    transition: all 0.2s ease;
    text-decoration: none;
    &:hover {
      color: rebeccapurple;
    }
  }
`;

const Archive = () => {
  return (
    <StaticQuery
      query={POST_ARCHIVE_QUERY}
      render={data => (
        <StyledAside>
          <h3>Archive</h3>
          <ul>
            {data.allMarkdownRemark.edges.map(post => {
              const { frontmatter } = post.node;
              return (
                <li key={frontmatter.slug}>
                  <Link to={`/posts/${frontmatter.slug}`}>
                    {frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </StyledAside>
      )}
    />
  );
};

export default Archive;
