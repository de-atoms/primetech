import React from "react";

const startups = [
  {
    img: "startup-4",
  },
  {
    img: "startup-5",
  },
  {
    img: "startup-11",
  },
  {
    img: "startup-12",
  },
  {
    img: "startup-2",
  },
];

const Business = () => {
  return (
    <div className="business pt-y-big">
      <div className="container">
        <div className="row">
          <div className="left business__heading">
            <h2 className="left-title">
              Primetech for <span>Business</span>
            </h2>
          </div>
          <div className="right business__content">
            <p className="business__content-title">
              High-quality solutions in the design and development field will
              help you develop your business. Primetech provides an &nbsp;
              <span> affordable way to get your business up and scaling.</span>
            </p>
            <p className="business__content-subtitle">
              Our biggest impact and value comes from creating amazing websites
              that allow Businesses to maximize profit using top-notch strategy.
              You can scale faster by reducing the cost of hiring people do
              seamless tasks.
            </p>
          </div>
        </div>
        <div className="grid business__client pt-y-big">
          {startups.map((startup, index) => (
            <div className="col-4" key={index}>
              <img
                src={require(`../../assets/icons/niche/${startup.img}.svg`)}
                alt={startup.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
