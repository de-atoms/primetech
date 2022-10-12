import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import Logo from "./logo";

const Header = ({ menuState, setMenuState }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "header active" : "header"}>
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link
              to="/"
              className={navbar ? "active" : ""}
              exact="true"
              onClick={() => setMenuState(false)}
            >
              <Logo />
            </Link>
          </div>
          <div className="nav-toggle">
            {menuState === false ? (
              <div
                className={navbar ? "hamburger-menu active" : "hamburger-menu"}
                onClick={() => setMenuState(!menuState)}
              >
                <span></span>
                <span></span>
              </div>
            ) : (
              <div
                onClick={() => setMenuState(!menuState)}
                className={
                  navbar
                    ? "hamburger-menu-close active"
                    : "hamburger-menu-close"
                }
              >
                <UpArrow />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
