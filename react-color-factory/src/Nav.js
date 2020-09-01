import React from 'react';

import { NavLink } from 'react-router-dom';

import './Nav.css';

function Nav(props) {

  const { dogs } = props;
  // console.log("dogs : ", dogs);
  // const [duke, perry, tubby, whiskey] = dogs;

  return (
    <nav className="Nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/colors">
        All Colors
      </NavLink>
      <NavLink exact to="/colors/:color">
        Color Display
      </NavLink>
      <NavLink exact to="/colors/new">
        Add New Color
      </NavLink>
    </nav>
  )
}


/*
  /colors (list of all available colors)
  /colors/:color (display color in all its glory)
  /colors/new (display form to select color, then redirect to colors index )
  /colors/nope (redirect to /colors)
  /anythingWrong (redirec to colors index)
*/

export default Nav;
