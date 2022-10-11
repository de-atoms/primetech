import React from "react";
import { ReactComponent as Figma } from "../assets/svg/figma.svg";
import { ReactComponent as Code } from "../assets/code.svg";
import { Link } from "react-router-dom";

const About = ({ text }) => {
  return (
    <section className="about__section">
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="about__wrapper">
              <img
                src={require("../assets/cube.png")}
                alt="prime-cube"
                className="about__wrapper-img"
              />
              <div className="about__wrapper-description">
                <h3>
                  {text}
                  <br />
                  <span>We can help you.</span>
                </h3>
              </div>
              <div className="grid">
                <Link
                  to="/web-design"
                  className="grid__achievement grid__achievement-left"
                >
                  <Figma />
                  <h4>Design</h4>
                  <p>
                    There are over 100,000+ designers in the world as at today,
                    but what makes us standout, is our love for things that are
                    easy on the eyes. Our designers are just spectaculous giving
                    you limitless designs that creates convergence.
                  </p>
                </Link>
                <Link
                  to="/web-development"
                  className="grid__achievement grid__achievement-right"
                >
                  <Code />
                  <h4>Development</h4>
                  <p>
                    Development cant be left-out when we talk of designs. We
                    would never create a slick design for you and allow you go
                    away without the help of turning your designs into reality.
                    our Developers are just over the moon when it comes to
                    creativity.
                  </p>
                </Link>
              </div>
              <img
                src={require("../assets/ladder.png")}
                alt="prime-ladder"
                className="about__wrapper-img2"
              />
              <img
                src={require("../assets/star.png")}
                alt="prime-star"
                className="about__wrapper-img3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container show">
        <div className="row">
          <img
            src={require("../assets/star.png")}
            alt="prime-star"
            className="about__wrapper-img3"
          />
          <p className="mobilescroll-heading">
            We are just as much as interested in everyone, as long as you
            looking forward to scale to another level in the online space
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
