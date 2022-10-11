import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row">
          <div className="error-page__wrapper">
            <div className="error-page__wrapper-img">
              <img src={require("../assets/error-404.png")} alt="error404" />
            </div>
            <h3>
              <span>404</span> Page not found
            </h3>
            <p>
              page you are looking for doesn't exit or an other error occured or
              temporarily unavailable.
            </p>
            <Link to="/">Go TO Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
