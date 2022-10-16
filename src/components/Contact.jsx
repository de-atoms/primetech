import React from "react";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as SmartPhone } from "../assets/smartphone.svg";
import { ReactComponent as ExternalLink } from "../assets/external-link.svg";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Contact = () => {
  return (
    <div className="contact">
      <img
        src={require("../assets/spring.png")}
        alt="prime-spring"
        className="contact-spring"
      />
      <div className="container">
        <div className="grid">
          <div className="contact__info">
            <div className="contact__info-content">
              <h1>Get Custom Design for your project</h1>
              <p>
                I’d love to meet up with you to discuss your venture, and
                potential collaborations.
              </p>
            </div>
            <ul className="contact__info-details">
              <li className="detail email">
                {" "}
                <Mail />
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:contact@webjunos.com";
                    e.preventDefault();
                  }}
                >
                  contact@webjunos.com
                </Link>
              </li>
              <li className="detail address">
                {" "}
                <Home />
                P2-02, Silas str, Nwaniba
              </li>
              <li className="detail phone">
                {" "}
                <SmartPhone />
                +234 808 127 1207
              </li>
            </ul>
          </div>
          <div className="contact__schedule">
            <div className="contact__schedule-content">
              <img src={require("../assets/src.gif")} alt="schedule" />
              <h2>Schedule Meeting</h2>
              <div className="description">
                <h4>
                  Currently, <Logo /> doesn't have any meeting times available.
                </h4>
                <p>You can still request a meeting by emailing them at</p>
                <a href="mailto: contact@webjunos.com">
                  contact@webjunos.com <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
