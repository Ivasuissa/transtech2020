import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Sorry this pages does not exist</h3>
        <NavLink exact to="/Home">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
