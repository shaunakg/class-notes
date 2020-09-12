import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }} className="headerHeading">
        <Link
          to="/"
          style={{
            textDecoration: 'none'
          }}
        >
          <img title={siteTitle} aria-label={siteTitle + " logo"} alt={siteTitle} src="/icons/icon-192x192.png" className="iconImage" />
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
