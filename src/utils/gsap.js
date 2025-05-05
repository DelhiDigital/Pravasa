// Safely import GSAP only on the client side
let gsap
let ScrollTrigger

// Only import GSAP on the client side
if (typeof window !== "undefined") {
  gsap = require("gsap")
  ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
