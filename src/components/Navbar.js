import React from 'react'
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <nav style={nav}> 
            <i className={props.icon} />{props.tittle}
        </nav>
    )
}
Navbar.defaultProps = {
    icon: "fab fa-github",
    tittle: "Github Searcher"
}
Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired
}
const nav = {
    background:"black",
    color:"white",
    padding:"7px"
}
export default Navbar
