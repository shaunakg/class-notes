
import React from 'react';

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