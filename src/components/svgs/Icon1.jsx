import React, { useEffect, useRef, useState } from "react";
import { animated, useSprings } from "react-spring";

function Curl3(props) {
  return (
    <g {...props} display="block" mask="url(#__lottie_element_29)">
      <path
        fill="#d7369f"
        d="M-19.155.722c11.628-5.09 24.809-8.69 37.597-6.58a3.005 3.005 0 012.471 3.45 3.002 3.002 0 01-3.448 2.47c-11.647-1.92-23.624 1.52-34.214 6.16a3.005 3.005 0 01-3.952-1.55 3.005 3.005 0 011.546-3.95z"
        transform="translate(73.906 40.945) scale(2)"
      ></path>
    </g>
  );
}
function Curl2(props) {
  return (
    <g {...props} display="block" mask="url(#__lottie_element_35)">
      <path
        fill="#d7369f"
        d="M-20.505 21.075c9.208-16.6 22.382-33.04 36.364-45.82a3 3 0 114.048 4.43c-13.52 12.35-26.261 28.25-35.165 44.3a3.003 3.003 0 01-4.079 1.17 3.002 3.002 0 01-1.168-4.08z"
        transform="translate(86.156 106.639) scale(2)"
      ></path>
    </g>
  );
}
function Curl1(props) {
  return (
    <g {...props} display="block" mask="url(#__lottie_element_41)">
      <path
        fill="#d7369f"
        d="M-4.043 12.074c.247-8.5.112-16.57 2.173-24.95a2.998 2.998 0 013.629-2.2 2.998 2.998 0 012.197 3.63C2-3.486 2.189 4.184 1.955 12.244a3.005 3.005 0 01-3.087 2.92 3.003 3.003 0 01-2.911-3.09z"
        transform="translate(156.633 115.381) scale(2)"
      ></path>
    </g>
  );
}

function Icon() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);

  const curls = [
    <Curl1 key="curl-1" />,
    <Curl2 key="curl-2" />,
    <Curl3 key="curl-3" />,
  ];

  const springs = useSprings(
    curls.length,
    curls.map((_, i) => {
      return {
        transform: toggle
          ? "translate3d(0px,0px,0px)"
          : "translate3d(-400px,0px,0px)",
        //opacity
        opacity: toggle ? 1 : 0,
        delay: i * 100,
      };
    })
  );

  const animatedCurls = springs.map((animatedStyle, index) => {
    return (
      <animated.g key={index} style={animatedStyle}>
        {curls[index]}
        console.log(curls[index]);
      </animated.g>
    );
  });

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setToggle(!toggle);
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
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 196 188"
        ref={ref}
        style={{ position: "absolute" }}
      >
        <defs>
          <clipPath id="__lottie_element_25">
            <path d="M0 0H196V188H0z"></path>
          </clipPath>
          <mask id="__lottie_element_29">
            <path
              fillOpacity="0"
              stroke="red"
              strokeLinecap="round"
              strokeWidth="12"
              d="M13-59.5S-2.5-61-18-59s-43 14-43 14"
              display="block"
              transform="translate(98 94)"
            ></path>
          </mask>
          <mask id="__lottie_element_35">
            <path
              fillOpacity="0"
              stroke="red"
              strokeLinecap="round"
              strokeWidth="12"
              d="M26-33S-10.5-6-49 59"
              display="block"
              transform="translate(98 94)"
            ></path>
          </mask>
          <mask id="__lottie_element_41">
            <path
              fillOpacity="0"
              stroke="red"
              strokeLinecap="round"
              strokeWidth="12"
              d="M60.5-4s-5 27.5-3 52.5"
              display="block"
              transform="translate(98 94)"
            ></path>
          </mask>
        </defs>
        <g clipPath="url(#__lottie_element_25)">{animatedCurls}</g>
      </svg>
    </>
  );
}

export default Icon;
