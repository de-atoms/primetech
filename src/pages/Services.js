import React from "react";
import Footer from "../components/Footer";
import ServicesLandingPage from "../components/Landing-page/ServicesLandingPage";
import Niche from "../components/Niche";
import Service from "../components/Service";
import Stack from "../components/Stack";

const Services = () => {
  return (
    <div className="service">
      <ServicesLandingPage />
      <Service />
      <Niche />
      <Stack />
      <Footer />
    </div>
  );
};

export default Services;
