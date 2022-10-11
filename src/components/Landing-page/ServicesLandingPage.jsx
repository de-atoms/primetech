import React from "react";
import { Link } from "react-router-dom";

const ServicesLandingPage = () => {
  return (
    <div className="service__landing">
      <div className="service__landing-bg">
        <img
          src={require("../../assets/cube.png")}
          alt="prime-cube"
          className="service__landing-bg-cube"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="service__landing-content">
            <img
              src={require("../../assets/rings.png")}
              alt="prime-rings"
              className="rings"
            />

            <div className="service__landing-title-wrapper">
              <h2 className="service__landing-title">Work Inquiry</h2>
              <p>Let’s work together and build something awesome!</p>
            </div>

            <div className="service__landing-button">
              <img src={require("../../assets/glow.png")} alt="prime-glow" />
              <Link to="/request-quote">Schedule a call</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLandingPage;
