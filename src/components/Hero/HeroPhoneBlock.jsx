import React, { useState, useRef, useEffect } from "react";
import imgSrc from "../../assets/hero-phone-frame-v2.png";
import { gsap } from "gsap";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function HeroPhoneBlock() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const phoneRef = useRef(null);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    function intro() {
      const tl = gsap.timeline({});
      tl.fromTo(
        phoneRef.current,
        { y: 200 },
        { duration: 0.8, y: 0, delay: 1, ease: "expo.inOut" }
      );
      return tl;
    }

    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          pin: true,
          trigger: phoneRef.current,
          start: "top bottom",
          end: dimensions.width <= 654 ? "+=220" : "+=600",
          // end: "+=550",
          scrub: true,
          //   anticipatePin: 1,
          //   markers: true,
        },
      });

      //   add animations and labels to the timeline
      tl.to(
        phoneRef.current,
        {
          scale: 1.2,
        },
        "+=0.2"
      );
      tl.to(
        ".hero",
        {
          // selector text, Array, or object
          backgroundColor: "black", // camelCase
          duration: 0.25, // seconds
        },
        "-=0.5"
      );

      return tl;
    }
    const master = gsap.timeline();
    master.add(intro()); //with a gap of 2 seconds

    // could not make it with delay from gsap
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <div className="hero-phone-block" ref={phoneRef}>
      <div
        className="hero-phone-template"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <img
          src={require(`../../assets/girl1.png`)}
          alt="primetech"
          className="collage-element"
        />
      </div>
    </div>
  );
}
