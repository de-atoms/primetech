import React, { useEffect, useState } from "react";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";

export default function PageScrollToTop() {
  const [scroll, setScroll] = useState(false);

  const top = () => {
    window.scrollTo(0, 0);
  };

  const addScrollToTop = () => {
    if (window.scrollY >= 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addScrollToTop);
  }, []);

  return (
    <>
      <button
        onClick={top}
        className={scroll ? "scroll-to-top active" : "scroll-to-top "}
      >
        <UpArrow />
      </button>
    </>
  );
}
