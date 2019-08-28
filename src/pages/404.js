import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'

const NotFound = () => {
  return (
    <Layout title={'404'}>
      <h1>404: Page not found</h1>
      <p><Link to="/">Head Home</Link></p>
    </Layout>
  )
}

export default NotFound