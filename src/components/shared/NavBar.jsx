import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Concepts
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavLink className="nav-link" to="/hoc">
          Hoc
        </NavLink>
        {/* <NavLink className="nav-link" to="/hooks">
          Hooks
        </NavLink> */}
        <NavLink className="nav-link" to="/context">
          Context
        </NavLink>
        <NavLink className="nav-link" to="/axios-dyma">
          Axios tuto Dyma
        </NavLink>
        <NavLink className="nav-link" to="/axios-mosh">
          Axios tuto Mosh
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
