import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import gsap from "gsap";

import "./styles/App.scss";

//components
import Header from "./components/Header";
// import Navigation from "./components/Navigation";

//hooks
import PageScrollToTop from "./hooks/PageScrollToTop";
import ScrollToTopButton from "./hooks/ScrollToTop";
import CustomCursor from "./hooks/CustomCursor";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Request from "./pages/Request";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Error404 from "./pages/Error404";
import Navigation from "./components/Navigation";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about-us", name: "About Us", Component: About },
  { path: "/portfolio", name: "Portfolio", Component: Portfolio },
  { path: "/services", name: "Services", Component: Services },
  { path: "/request-quote", name: "Request", Component: Request },
  { path: "/web-design", name: "Design", Component: Design },
  { path: "/web-development", name: "Development", Component: Development },
  { path: "/web-consultation", name: "Design", Component: Design },
  { path: "/privacy-policy", name: "Privacy", Component: Privacy },
  { path: "/*", name: "Error 404", Component: Error404 },
];

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

function App() {
  //prevent flashing of white on page load from happening
  gsap.to("body", 0, { css: { visibility: "visible" } });

  const [menustate, setMenuState] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    //Grab inner height and width of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01;
    let vw = dimensions.width * 0.001;

    // console.log(vw);
    //set css variable vh and vw
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <>
      <PageScrollToTop />
      <ScrollToTopButton />
      <CustomCursor />
      <Header menuState={menustate} setMenuState={setMenuState} />
      <Navigation menuState={menustate} setMenuState={setMenuState} />
      <div className="App">
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
