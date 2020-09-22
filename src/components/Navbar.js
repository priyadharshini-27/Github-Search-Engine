import React from "react";

const Navbar = () => {
  return (
    <div style={navbar}>
      <i className="fab fa-github" /> Github Search Engine
    </div>
  );
};

const navbar = {
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  fontSize: "1.5em",
};

export default Navbar;
