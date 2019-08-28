import React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby'

import Footer from './footer';
import Header from './header';
import '../styles/index.scss';

import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }`
  )

  return(
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Helmet title={`${props.title} | ${data.site.siteMetadata.title}`}/>
        <Header/>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout