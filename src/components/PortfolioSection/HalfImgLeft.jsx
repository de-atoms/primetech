import React from "react";

const HalfImgLeft = () => {
  return (
    <div className="casebox ">
      <div className="container">
        <div className="row">
          <div className="casebox__wrapper halfimgleft">
            <div className="text__content">
              <div className="title">DIGIEXAM</div>
              <p className="description">
                The examination process is broken, great knowledge deserves
                great exams
              </p>
              <div className="work">
                <span>Brand Identity</span>
                <span>Brand Strategy</span>
                <span>Brand System</span>
                <span>Web Design</span>
              </div>
            </div>
            <div className="full__img">
              <img src={require("../../assets/vokprime.png")} alt="digiexam" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfImgLeft;
