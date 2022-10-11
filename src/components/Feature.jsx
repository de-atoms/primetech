import React from "react";
import { Link } from "react-router-dom";
import heroBannerImage from "../assets/prime-man.png";

const Feature = () => {
  return (
    <section className="feature">
      <img
        src={require("../assets/spring.png")}
        alt="prime-feature"
        className="feature-cube"
      />
      <img
        src={require("../assets/cone.png")}
        alt="prime-feature"
        className="feature-cone"
      />
      <img
        src={require("../assets/footer-cube.png")}
        alt="prime-feature"
        className="feature-ft-cube"
      />
      <div className="container">
        <div className="row">
          <div className="feature__left">
            <h2 className="feature__left-heading">
              Great software is built with <span> amazing developers</span>
            </h2>
            <p className="feature__left-desc">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
            <Link to="/services" className="btn">
              Get started
            </Link>
          </div>
          <div className="feature__right">
            <img src={heroBannerImage} alt="primetech" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
