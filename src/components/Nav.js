import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const active = {
  fontWeight: 700,
};

function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navLink} activeStyle={active} to="/" exact>
        Home
      </NavLink>
      <NavLink className={styles.navLink} activeStyle={active} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
