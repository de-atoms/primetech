import React from "react";
import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <section className="hire">
      <div className="container">
        <div className="row">
          <div className="hire__content">
            <img
              src={require("../assets/rings.png")}
              alt="prime-rings"
              className="rings"
            />
            <div className="hire__heading">
              <h2 className="hire__title">
                Hire the world’s best developers and designers around!
              </h2>
            </div>
            <div className="hire__button">
              <img src={require("../assets/glow.png")} alt="prime-glow" />
              <Link to="/request-quote">Request Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
