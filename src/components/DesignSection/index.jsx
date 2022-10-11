import React from "react";
import DesignCareers from "./DesignCareers";
import DesignLandingPage from "./DesignLandingPage";
import DesignSticky from "./DesignSticky";

const DesignSection = () => {
  return (
    <div className="designs">
      <DesignLandingPage />
      <DesignSticky />
      <DesignCareers />
    </div>
  );
};

export default DesignSection;
