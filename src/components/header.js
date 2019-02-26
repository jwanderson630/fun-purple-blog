import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: [pad-left] 25px [main] 6fr [pad-right] 25px;
  grid-gap: 10px;
  box-shadow: 2px 10px 35px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0px;
  z-index: 10;
  @media (min-width: 850px) {
    grid-template-columns: [pad-left] minmax(10px, 1fr) [main] 6fr [side] 2fr [pad-right] minmax(
        10px,
        1fr
      );
    grid-gap: 25px;
  }
  div {
    grid-column: main / side;
  }
  h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader
    style={{
      background: `rebeccapurple`
    }}
  >
    <div
      style={{
        padding: `1.5rem 0`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
