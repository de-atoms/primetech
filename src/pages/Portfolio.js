import React from "react";
import PortFolioLandingpage from "../components/Landing-page/PortFolioLandingpage";
import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <PortFolioLandingpage />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
