import React from "react";
import clientAbout from "../assets/prime-skyrocket.png";
import { ReactComponent as Check } from "../assets/check.svg";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="row">
          <div className="info__left">
            <img src={clientAbout} alt="primetech" />
          </div>
          <div className="info__right">
            <h2 className="info__right-heading">
              Boost your agencies by choosing <span> Primetech Developers</span>
            </h2>
            <p className="info__right-desc">
              Create custom landing pages with Shades that convert more visitors
              than any website, no coding required.
            </p>
            <ul className="info__right-lists">
              <li>
                <Check /> Unlimited design possibility
              </li>
              <li>
                <Check />
                Completely responsive features
              </li>
              <li>
                <Check />
                Unlimited design possibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
