import React from "react";

const startups = [
  {
    img: "startup-13",
  },
  {
    img: "startup-14",
  },
  {
    img: "startup-15",
  },
  {
    img: "startup-16",
  },
  {
    img: "startup-17",
  },
];

const Agency = () => {
  return (
    <div className="agency pt-y-big">
      <div className="container">
        <div className="row">
          <div className="left agency__heading">
            <h2 className="left-title">
              Primetech for <span>Agency</span>
            </h2>
          </div>
          <div className="right agency__content">
            <p className="agency__content-title">
              We work with marketing teams at big companies that are changing
              their focus &nbsp;
              <span>
                from being a legacy product/service to a market leader and
                innovator.
              </span>
            </p>
            <p className="agency__content-subtitle">
              Our biggest impact and value comes from creating amazing websites
              for individual departments and expanding their impact across the
              whole organization. We do this by implementing a design system
              made in primetech tailored to their unique needs so they can move
              as fast as an agency.
            </p>
          </div>
        </div>
        <div className="grid agency__client pt-y-big">
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

export default Agency;
