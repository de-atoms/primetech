import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageScrollToTop from "../hooks/PageScrollToTop";
import { AboutText } from "../data";
import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";
// import Hero from "../components/Hero/Index";
// import Feature from "../components/Feature";
import Client from "../components/Client";
import Info from "../components/Info";
import Service from "../components/Service";
import MobileScroll from "../components/MobileScroll/MobileScroll";
import Stack from "../components/Stack";
import Testimonials from "../components/Testimonials";
import Hire from "../components/Hire";
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const homeAnimation = (completeAnimation) => {
  //create gsap timeline
  const tl = gsap.timeline();

tl.to(".main .row h2 .line", 1, { css: { display: "flex" } })
  .from(".line span", 0.4, {
    y: 100,
    ease: "power4.out",
    delay: 0.5,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1, {
      height: 0,
    ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })

    .to(".intro-overlay", 0, { css: { display: "none" } })
    .from(".case-image img", 1.3, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },

      onComplete: completeAnimation,
    });
};

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //onload timeline
    homeAnimation(completeAnimation);
  }, []);
  return (
    <>
      {animationComplete === false ? (
        <>
          <IntroOverlay />
          <Banner />
          <Cases />
        </>
      ) : (
        <>
          <PageScrollToTop />
          <Banner />
          <Cases />
          <AboutSection text={AboutText[0].home} />
          <MobileScroll />
          {/* <Hero /> */}
          {/* <Feature /> */}
          <Client />
          <Info />
          <Service />
          <Hire />
          <Stack />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
