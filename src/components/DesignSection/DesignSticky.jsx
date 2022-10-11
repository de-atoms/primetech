import React from "react";
import Img from "../../assets/brand-demographic.png";
import Icon2 from "../svgs/Icon2";

const DesignSticky = () => {
  return (
    <header className="designs__sticky bg-black pt-y-big">
      <div className="container">
        <div className="row">
          <div className="left designs__sticky-left">
            <h2 className="left-title designs__sticky-left-title">
              Your Website is your Brand
              <Icon2 />
            </h2>
          </div>
          <div className="right designs__sticky-right">
            <p className="designs__heading">
              Your website is your most important brand piece. It’s the key
              connection between your brand and your customers.
            </p>
            <p className="designs__text">
              We help you grow and strengthen those connections with amazingly
              designed websites that empower your brand. We build websites that
              help our clients (hopefully you) connect with their customers and
              share the value you bring to them.
            </p>

            <img src={Img} alt="prime-brand" />

            <p className="designs__text">
              We build websites that help our clients connect with their
              customers and share the value you bring to them. Your website is
              what makes your company unique for the outside world, it’s your
              brand story told out loud.{" "}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesignSticky;
