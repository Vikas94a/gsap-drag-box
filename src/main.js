import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger);
gsap.to("#circle", {
  scrollTrigger: {
    trigger: "#circle",
    start: "top ",
    end: "bottom ",
    scrub: true,
    markers: true,
  },
  y: 600,
  rotate: 360,
});

gsap.registerPlugin(Draggable);
Draggable.create(".box1");
Draggable.create(".box2");
Draggable.create(".box3");
Draggable.create(".box4");
Draggable.create("#circle");



