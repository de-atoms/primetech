import React from "react";
import Icon from "../svgs/Icon1";

const careers = [
  {
    img: "icon-illustration-1",
    name: "Web Design",
  },
  {
    img: "icon-illustration-2",
    name: "UI Design",
  },
  {
    img: "icon-illustration-3",
    name: "Graphics design",
  },
  {
    img: "icon-illustration-4",
    name: "Animations",
  },
  {
    img: "icon-illustration-5",
    name: "Video editing",
  },
  {
    img: "icon-illustration-6",
    name: "prototyping",
  },
];

const DesignCareers = () => {
  return (
    <div className="designs__careers pt-y-big">
      <div className="container">
        <div className="row">
          <div className="left designs__careers-left">
            <h2 className="left-title designs__careers-left-title">
              Full-Service Design
              <Icon />
            </h2>
          </div>

          <div className="right designs__careers-right">
            <p className="designs__heading">
              We got it all! Our multidisciplinary team creates amazing websites
              from 0 to launch.
            </p>
            <p className="designs__text">
              We help you grow and strengthen those connections with amazingly
              designed websites that empower your brand. We build websites that
              help our clients (hopefully you) connect with their customers and
              share the value you bring to them.
            </p>

            <div className="designs__careers-right-wrapper">
              {careers.map((career, index) => (
                <div className="cards" key={index}>
                  <img
                    src={require(`../../assets/${career.img}.png`)}
                    alt={career.name}
                  />
                  <div className="cards-title">
                    <h3>{career.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCareers;
