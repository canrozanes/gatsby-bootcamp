import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout'


const AboutPage = () => {
  return (
    <div>
      <Layout title="About">
        <h1>About Me</h1>
        <p>I currently work at OMERS</p>
        <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage