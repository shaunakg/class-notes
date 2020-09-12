
import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({author}) => {
    return (
        <footer>
            Copyright &copy; {new Date().getFullYear()} {author}
        </footer>
    )
}

Footer.defaultProps = {
    author: "Shaunak G"
}

export default Footer;