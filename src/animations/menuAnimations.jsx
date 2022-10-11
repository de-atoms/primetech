import gsap from "gsap";

let tl = gsap.timeline();

export const openMenu = () => {
  tl.to(".hamburger-menu span", 0.6, {
    delay: -1,
    scaleX: 0,
    transformOrigin: "50% 0%",
    ease: "expo.inOut",
  })
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 5,
      },
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 20,
      },
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 18,
      },
    })
    .to("#circle", 0.6, {
      delay: -0.8,
      css: {
        strokeDashoffset: 0,
      },
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", 0.6, {
      delay: -0.8,
      css: { display: "block" },
    });
};

export const closeMenu = () => {
  tl.to("#circle", 0.6, {
    delay: -0.6,
    css: {
      strokeDashoffset: -193,
      strokeDasharray: 227,
    },
  })
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10,
      },
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 40,
      },
    })
    .to(".hamburger-menu span", 0.6, {
      delay: -0.6,
      scaleX: 1,
      transformOrigin: "50% 0%",
      ease: "expo.inOut",
    })
    .to(".hamburger-menu-close", 0, {
      delay: -0.1,
      // css: { display: "none" },
    });
};

//open animation
// tl.to("body", 0.01, {
//   css: { overflow: "hidden" },
// })
//   .to(".App", 1, {
//     y: dimensions.width <= 654 ? "75vh" : "100vh",
//     ease: "expo.inOut",
//   })
//   .to("nav", 0, {
//     css: { zIndex: 3 },
//   })
//   .to(".hamburger-menu span", 0.3, {
//     delay: -1,
//     scaleX: 0,
//     transformOrigin: "50% 0%",
//     ease: "expo.inOut",
//   })
//   .to("#Path_1", 0.4, {
//     delay: -0.6,
//     css: {
//       strokeDashoffset: 10,
//       strokeDasharray: 5,
//     },
//   })
//   .to("#Path_2", 0.4, {
//     delay: -0.6,
//     css: {
//       strokeDashoffset: 10,
//       strokeDasharray: 20,
//     },
//   })
//   .to("#Line_1", 0.4, {
//     delay: -0.6,
//     css: {
//       strokeDashoffset: 40,
//       strokeDasharray: 18,
//     },
//   })
//   .to("#circle", 0.6, {
//     delay: -0.8,
//     css: {
//       strokeDashoffset: 0,
//     },
//     ease: "expo.inOut",
//   })
//   .to(".hamburger-menu span", 0.6, {
//     delay: -0.6,
//     scaleX: 0,
//     transformOrigin: "50% 0%",
//     ease: "expo.inOut",
//   })
//   .to(".hamburger-menu-close", 0.6, {
//     delay: -0.8,
//     css: {
//       display: "block",
//     },
//   });

// close animation
//  tl.to(".App", 1, {
//    y: 0,
//    ease: "expo.inOut",
//  })
//    .to("nav", 0, {
//      ease: "expo.inOut",
//      css: { zIndex: 1 },
//    })
//    .to("#circle", 0.6, {
//      delay: -0.6,
//      css: {
//        strokeDashoffset: -193,
//        strokeDasharray: 227,
//      },
//    })
//    .to("#Path_1", 0.4, {
//      delay: -0.6,
//      css: {
//        strokeDashoffset: 10,
//        strokeDasharray: 10,
//      },
//    })
//    .to("#Path_2", 0.4, {
//      delay: -0.6,
//      css: {
//        strokeDashoffset: 10,
//        strokeDasharray: 10,
//      },
//    })
//    .to("#Line_1", 0.4, {
//      delay: -0.6,
//      css: {
//        strokeDashoffset: 40,
//        strokeDasharray: 40,
//      },
//    })

//    .to(".hamburger-menu span", 1, {
//      delay: -0.6,
//      scaleX: 1,
//      transformOrigin: "50% 0%",
//      ease: "expo.inOut",
//    })
//    .to(".hamburger-menu-close", 0, {
//      css: {
//        display: "none",
//      },
//    })
//    .to("body", {
//      css: {
//        overflow: "auto",
//      },
//    });
