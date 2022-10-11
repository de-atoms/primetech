import React from "react";

const HalfImgRight = () => {
  return (
    <div className="casebox ">
      <div className="container">
        <div className="row">
          <div className="casebox__wrapper halfimgright">
            <div className="full__img">
              <img
                src={require("../../assets/africgoldm.png")}
                alt="afrigold"
              />
            </div>
            <div className="text__content">
              <div className="title">Africgoldm</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfImgRight;
