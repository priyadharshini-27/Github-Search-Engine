import React from 'react'
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <nav className='navbar'> 
            <i className={props.icon} style={git}/>{props.tittle}
        </nav>
    )
}
Navbar.defaultProps = {
    icon: "fab fa-github",
    tittle: "Github Search Engine"
}
Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired
}

const git={
    padding:'7px'
};

export default Navbar