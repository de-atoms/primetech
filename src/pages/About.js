import React from "react";
import AboutSection from "../components/AboutSection";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hire from "../components/Hire";
import Niche from "../components/Niche";
import Testimonials from "../components/Testimonials";
import Values from "../components/Values";
import { AboutText } from "../data";

const About = () => {
  return (
    <div className="page">
      <AboutSection text={AboutText[0].about} />
      <Niche />
      <Hire />
      <Values />
      <Client />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
