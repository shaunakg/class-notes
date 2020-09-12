import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header';
import Footer from './footer';

import 'typeface-inter';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Some class notes.' },
            { name: 'keywords', content: 'physics, mathematics, class, notes' },
            { property: "og:image", content: 'https://og.srg.codes/%23%23%20Class%20notes.png?theme=light&md=1&square=0&fontSize=100px&border=none%3Bbackground%3Anone&images=https%3A%2F%2Fcdn.srg.codes%2Fimages%2Ficon%2Ficon.svg&images=https%3A%2F%2Fnotes.srg.codes%2Ficons%2Ficon-144x144.png&widths=undefined&widths=auto&heights=undefined&heights=auto&bgimage=https%3A%2F%2Funsplash.com%2Fphotos%2F1_CMoFsPfso%2Fdownload%3Fforce%3Dtrue%26w%3D1920' },
            { property: 'og:title', content: 'Class notes' },
            { property: 'og:site_name', content: "Class notes" },
            { property: 'og:type', content: "website" },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer author={data.site.siteMetadata.author} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
