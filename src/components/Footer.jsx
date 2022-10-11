import React from "react";
import { Link, NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <h3>Subscribe to get notified about update</h3>
          <p>
            By subscribing with your mail, you will accept our{" "}
            <Link to="/privacy-policy" exact="true">
              privacy policy
            </Link>
          </p>

          <Newsletter />

          <div className="footer__content">
            <Link to="/" className="footer-logo" exact="true">
              <span>Made with ❤️ by</span> PrimeTech
            </Link>
            <ul>
              <li>
                <NavLink to="/about-us" exact="true">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" exact="true">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact="true">
                  Services{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/request-quote" exact="true">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
