import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";
import Img from "gatsby-image";
import Header from "./header";
import "./layout.css";
import Archive from "./archive";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: [pad-left] 15px [main aside] 6fr [pad-right] 15px;
  grid-template-rows: [header] auto [main] 1fr [aside] auto;
  grid-gap: 20px;
  align-items: start;
  border-bottom: 10px solid rebeccapurple;
  background-color: white;
  @media (min-width: 850px) {
    grid-template-columns: [pad-left] minmax(10px, 1fr) [main] 6fr [aside] 2fr [pad-right] minmax(
        10px,
        1fr
      );
    grid-template-rows: [header] auto [main aside] 1fr;
    grid-gap: 25px;
  }
  header {
    grid-column: pad-left / -1;
    grid-row: header;
  }
  main {
    grid-column: main;
    grid-row: main;
    display: grid;
    grid-gap: 25px;
    grid-auto-rows: auto;
    margin-bottom: 20px;
    img {
      border-radius: 10px;
    }
  }
  aside {
    grid-column: aside;
    grid-row: aside;
  }
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/bg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          <Spring
            from={{ height: location.pathname === "/" ? 100 : 230 }}
            to={{ height: location.pathname === "/" ? 230 : 100 }}
          >
            {style => (
              <div
                style={{ overflow: "hidden", borderRadius: "10px", ...style }}
              >
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            )}
          </Spring>
          {children}
        </main>
        <Archive />
      </StyledLayout>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
Layout.defaultProps = {
  location: {}
};

export default Layout;
