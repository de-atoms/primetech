import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Check } from "../../assets/check.svg";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
  return (
    <div className="screen-text" ref={ref}>
      <h2 className="screen-heading">{screen.heading}</h2>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen">
            <img
              src={require(`../../assets/${screen.mobile_img}.png`)}
              className="mobile-mockup-screen-img slide-in-right "
              key={screen.mobile_img}
              alt="primetech"
            />
          </div>
        </div>
      </div>
      <p className="screen-desc">{screen.description}</p>
      <ul className="screen-lists">
        <li>
          <Check />
          <span> {screen.list[0]}</span>
        </li>
        <li>
          <Check />
          <span> {screen.list[1]}</span>
        </li>
        <li>
          <Check />
          <span> {screen.list[2]}</span>
        </li>
      </ul>
    </div>
  );
};

export default ScreenText;
