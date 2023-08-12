import React from "react";
import { NavLink } from "react-router-dom";

const SideNavBar = () => {
  function NavLinkStyle({ isActive }) {
    return { color: isActive && "blue" };
  }

  return (
    <>
      <ul className="sideNav_list flex-column">
        <li className="sideNav_listItem">
          <NavLink to="/" style={NavLinkStyle}>
            Dashboard
          </NavLink>
        </li>
        <li className="sideNav_listItem">
          <NavLink to="departments" style={NavLinkStyle}>
            Departments
          </NavLink>
        </li>
        <li className="sideNav_listItem">
          <NavLink to="products" style={NavLinkStyle}>
            Products
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default SideNavBar;
