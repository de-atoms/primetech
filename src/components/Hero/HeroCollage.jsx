import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function HeroCollage() {
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.fromTo(
      ".hero-element",
      { y: 300 },
      {
        duration: 1,
        y: 0,
        delay: function (i) {
          return 0.2 * i;
        },
      }
    );
  }, []);

  return (
    <>
      <div className="hidden-text">E</div>
      <div className="hidden-text-2">WE ARE PRIMETECH</div>
      <div className="hero-collage">
        <div className="left-column">
          <div className="hero-element">
            <span>P</span>
          </div>
          <div className="hero-element">
            <span>R</span>
          </div>
          <div className="hero-element">
            <span>I</span>
          </div>
          <div className="hero-element">
            <span>M</span>
          </div>
        </div>
        <div className="right-column">
          <div className="hero-element">
            <span>T</span>
          </div>
          <div className="hero-element">
            <span>E</span>
          </div>
          <div className="hero-element">
            <span>C</span>
          </div>
          <div className="hero-element">
            <span>H</span>
          </div>
        </div>
      </div>
    </>
  );
}
