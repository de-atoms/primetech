import React from "react";
import DevelopmentEnterprise from "./DevelopmentEnterprise";
import DevelopmentLandingPage from "./DevelopmentLandingPage";
import DevelopmentQuote from "./DevelopmentQuote";

const DevelopmentSection = () => {
  return (
    <div className="developments">
      <DevelopmentLandingPage />
      <DevelopmentEnterprise process={true} />
      <DevelopmentQuote />
      <DevelopmentEnterprise process={false} />
    </div>
  );
};

export default DevelopmentSection;
