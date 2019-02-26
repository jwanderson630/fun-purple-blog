import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const POST_LISTING_QUERY = graphql`
  query PostListingQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;

const StyledListing = styled.article`
  display: grid;
  grid-template-rows: [header] auto [title] 1fr [body] auto; [footer] 1fr;
  grid-template-columns: [left] minmax(auto, 150px) [main] 1fr [right] minmax(auto, 150px);
  padding: 15px;
  box-shadow: 2px 2px 20px 4px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.05);
  border-radius: 10px;
  .title {
      grid-row: title;
      grid-column: left / -1;
      text-decoration: none;
      transition: ease .2s all;
      color: #3d3d3d;
      &:hover {
          color: rebeccapurple;
      }
    }
    .body {
        gird-row: body;
        grid-column: left / -1;
    }
    .cta {
        grid-row: footer;
        grid-column: left;
        text-decoration: none;
        color: rebeccapurple;
        background-color: white;
        transform: scale(1);
        transition: ease .2s all;
        box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.05);
        text-align: center;
        border-radius: 10px;
        padding: 5px 0;
      &:hover {
          transform: scale(1.1);
          color: white;
          background-color: rebeccapurple;
      }
  }
  .date {
      grid-row: header;
      grid-column: left;
      margin: 0;
      font-size: .7rem;
      color: #777777;
  }
`;

class Listing extends Component {
  render() {
    return (
      <StaticQuery
        query={POST_LISTING_QUERY}
        render={data => {
          return data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <StyledListing key={node.frontmatter.slug}>
                <Link className="title" to={`/posts/${node.frontmatter.slug}`}>
                  <h2>{node.frontmatter.title}</h2>
                </Link>
                <p className="date">{node.frontmatter.date}</p>
                <p className="body">{node.excerpt}</p>
                <Link className="cta" to={`/posts/${node.frontmatter.slug}`}>
                  Read more
                </Link>
              </StyledListing>
            );
          });
        }}
      />
    );
  }
}

export default Listing;
