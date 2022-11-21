import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="container">
      <section className="container__nav">
        <NavLink to="/" className="container__logo">
          <img src="https://picsum.photos/200/300" alt="logo" />
        </NavLink>
        <NavLink to="/" className="container__text">
          Home
        </NavLink>
        <NavLink to="about" className="container__text">
          About
        </NavLink>
      </section>

      <Outlet></Outlet>
    </div>
  );
};

export default NavLinks;
