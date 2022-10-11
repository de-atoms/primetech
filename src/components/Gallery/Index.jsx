import React from "react";
import useLocoScroll from "../../hooks/useLocoScroll";
import Gallery from "./Gallery";

const Index = () => {
  useLocoScroll();
  return (
    <div id="main-container" className="main-container" data-scroll-container>
      <Gallery />
    </div>
  );
};

export default Index;
