import React from "react";
import Agency from "./Agency";
import Business from "./Business";
import Startup from "./Startup";

const Niche = () => {
  return (
    <div className="niche">
      <Startup />
      <Business />
      <Agency />
    </div>
  );
};

export default Niche;
