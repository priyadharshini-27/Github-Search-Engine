import React from "react";
import PropTypes from "prop-types";

const Navbar = ({icon,tittle}) => {     //using props ->props.icon
  return (
    <nav className="navbar">
      <i className={icon} style={git} />    
      {tittle}
    </nav>
  );
};
Navbar.defaultProps = {
  icon: "fab fa-github",
  tittle: "Github Search Engine",
};
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
};

const git = {
  padding: "7px",
};

export default Navbar;
