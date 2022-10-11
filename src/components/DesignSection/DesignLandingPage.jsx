import React from "react";
import Icon from "../svgs/Icon1";

const DesignLandingPage = () => {
  return (
    <header className="designs__landing">
      <div className="container">
        <div className="row">
          <div className="left designs__landing-left">
            <h1 className="designs__landing-left-heading">Web Design</h1>
            <Icon />
          </div>
          <div className="right designs__landing-right">
            <p className="designs__heading designs__landing-right-title">
              We are a design-driven agency creating amazing websites and web
              experiences.{" "}
            </p>
            <p className="designs__text designs__landing-right-subtitle">
              We help brands exceed their business and marketing goals by
              designing amazing websites that perfectly explain the product
              value and position them as market leaders.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesignLandingPage;
