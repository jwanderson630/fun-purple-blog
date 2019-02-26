import React from "react";
import Layout from "../components/layout";

import gatsbyImage from "../images/gatsby-astronaut.png";

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>About us</h1>
      <img src={gatsbyImage} alt="Gatsby Astronaut" />
    </Layout>
  );
};

export default About;
