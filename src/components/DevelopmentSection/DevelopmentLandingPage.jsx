import React from "react";
import DevLines from "../../assets/dev-lines.png";
import Tilt from "react-tilt";

const DevelopmentLandingPage = () => {
  return (
    <div className="developments__landing">
      <div className="container">
        <div className="row">
          <div className="developments__landing-heading">
            <h1>Smart Development</h1>
            <br />
            <span className="color-purple">no compromise</span>
          </div>
          <div className="dev-lines">
            <Tilt
              className="tilt"
              options={{ max: 6, scale: 1.01, speed: 200 }}
            >
              <img src={DevLines} alt="dev-lines" />
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentLandingPage;
