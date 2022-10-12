import React from "react";
import Logo from "../logo";

const startups = [
  {
    img: "startup-1",
  },
  {
    img: "startup-2",
  },
  {
    img: "startup-3",
  },
  {
    img: "startup-4",
  },
  {
    img: "startup-5",
  },
  {
    img: "startup-6",
  },
  {
    img: "startup-7",
  },
  {
    img: "startup-8",
  },
  {
    img: "startup-9",
  },
  {
    img: "startup-10",
  },
];

const Startup = () => {
  return (
    <div className="startup pt-y-big">
      <div className="container">
        <div className="row">
          <div className="left startup__heading">
            <h2 className="left-title">
              <Logo /> for <span>Startups</span>
            </h2>
          </div>
          <div className="right startup__content">
            <p className="startup__content-title">
              We work with founders of startups that need to change their focus
              (mostly after hitting a Series A milestone) &nbsp;
              <span> from building a product to building a company.</span>
            </p>
            <p className="startup__content-subtitle">
              Our biggest impact and value comes from creating amazing websites
              that allow startups to better explain the product value, reduce
              sales cycles, increase conversion, make marketing spend more
              efficient, reduce churn, close bigger clients, reduce CAC, and
              attract key talent.
            </p>
          </div>
        </div>
        <div className="grid startup__client pt-y-big">
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

export default Startup;
