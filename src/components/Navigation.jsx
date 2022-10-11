import React from "react";
import { NavLink } from "react-router-dom";
import { openMenu, closeMenu } from "../animations/menuAnimations";

const Navigation = ({ dimensions, menuState, setMenuState }) => {
  //Listening for page changes.
  if (menuState === false) {
    openMenu();
  } else if (menuState === true) {
    closeMenu();
  }
  return (
    <nav className={"nav " + (menuState && "nav-open")}>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/about-us"
                  exact="true"
                  onClick={() => setMenuState(!menuState)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  exact="true"
                  onClick={() => setMenuState(!menuState)}
                >
                  Case Study
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  exact="true"
                  onClick={() => setMenuState(!menuState)}
                >
                  Services{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/web-development"
                  exact="true"
                  onClick={() => setMenuState(!menuState)}
                >
                  Development{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/web-design"
                  exact="true"
                  onClick={() => setMenuState(!menuState)}
                >
                  Designs{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/request-quote"
                  exact="true"
                  onClick={() => setMenuState(!menuState)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink
                    to="/request-quote"
                    exact="true"
                    onClick={() => setMenuState(!menuState)}
                  >
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/audit" exact="true">
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>02 silas way, Nwaniba</li>
                <li>Uyo , Akwa-Ibom</li>
                <li>Nigeria</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+243 (0) 81 218 25297</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>
                  <NavLink
                    to="/privacy-policy"
                    exact="true"
                    onClick={() => setMenuState(!menuState)}
                  >
                    Privacy and cookies
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
