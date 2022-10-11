import React, { useEffect } from "react";
import gsap from "gsap";
import HeroCollage from "./HeroCollage";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUsedBy from "./HeroUsedBy";
import HeroFooter from "./HeroFooter";

const Index = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#hero-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="hero-media">
          <HeroCollage />
          <div className="hero-text-wrapper">
            <h2 id="hero-text">
              Build and scale your business with fixed, unlimited design and
              programming solutions.
            </h2>
          </div>
          <HeroPhoneBlock />
        </div>
        <HeroUsedBy />
        <HeroFooter />
      </div>
    </div>
  );
};

export default Index;
