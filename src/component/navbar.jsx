import React from "react";
const Navbar = props => {
  return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "} <span>{props.totalCounters}</span>
        </a>
      </nav>
  );
};

export default Navbar;
