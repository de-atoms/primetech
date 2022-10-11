import React, { useState } from "react";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "Startups",
    description:
      "Launch faster and cheaper than your competitors. We work with founders of startups that need to change their focus (mostly after hitting a Series A milestone) from building a product to building a company.",
    list: [
      "Task evaluation within 24 hours",
      "Senior and Middle+ level specialists",
      "The services cost is 50% lower than the market price",
    ],
    mobile_img: "prime-startup",
    fore_img: "background-right",
  },
  {
    heading: "Business",
    description:
      "High-quality solutions in the design and development field will help you develop your business. Primetech provides an affordable way to get your business up and scaling. You can scale faster by reducing the cost of hiring people do seamless tasks.",
    list: [
      "High-level specialists at a below-market rate",
      "Reduce the cost of hiring employees up to 70%",
      "Scaling as needed",
    ],
    mobile_img: "prime-business",
    fore_img: "background-right",
  },
  {
    heading: "Agencies",
    description:
      "Increase your agency’s workload without increasing overhead costs. We work with marketing teams at big companies that are changing their focus from being a legacy product/service to a market leader and innovator.",
    list: [
      "High-level specialists at a below-market rate",
      "Fast lead times",
      "Scaling as needed",
    ],
    mobile_img: "prime-agency",
    fore_img: "background-right",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="mobile-scroll">
      <div className="container">
        <div className="row">
          <div className="scroll-full-screen-wrapper">
            {scrollData.map((screen, i) => (
              <div className="scroll-full-screen" key={i.toString()}>
                <ScreenText
                  screen={screen}
                  setCurrentImg={setCurrentImg}
                  i={i}
                />
              </div>
            ))}
          </div>
          <div className="mobile-mockup-wrapper">
            <div className="mobile-mockup">
              <div className="mobile-mockup-screen">
                <img
                  // src={scrollData[currentImg].mobile_img}
                  src={require(`../../assets/${scrollData[currentImg].mobile_img}.png`)}
                  className="mobile-mockup-screen-img slide-in-right "
                  key={scrollData[currentImg].mobile_img}
                  alt="primetech"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
