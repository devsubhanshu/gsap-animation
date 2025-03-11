gsap.registerPlugin(ScrollTrigger);
gsap.set("#page3 h2, #page3 h3", { scale: 0.8, xPercent: 0 });
gsap.to("#page2 .video", {
    width: "100%",
    height:"100%",
    scrollTrigger: {
      trigger: "#page2 .video", // Set the correct trigger element
      // markers: true,      // Boolean, not a string
      start: "top 30%",  // Correct format
      end: "top 70%",
      scrub: 3,  
      pin:"true",     // Optional: Smooth scroll effect
    },
  });
gsap.to("#page3 h2",{
  scale:"1",
  xPercent: 50, 
  force3D: true,
  scrollTrigger: {
    trigger: "#page3 ",
    scroller:"body", // Set the correct trigger element
    // markers: true,      // Boolean, not a string
    start: "top 30%",  // Correct format
    end: "top -150%",
    scrub: 5,  
    pin:"true",     // Optional: Smooth scroll effect
  },
})
gsap.to("#page3 h3",{
  scale:"1",
  xPercent: -50, 
 
  scrollTrigger: {
    trigger: "#page3 ",
    scroller:"body", // Set the correct trigger element
    // markers: true,      // Boolean, not a string
    start: "top 30%",  // Correct format
    end: "top -150%",
    scrub: 5,  
    pin:"true",     // Optional: Smooth scroll effect
  },
})
gsap.to("#page4 p",{
  scale:"1",
  xPercent: 150, 
 overflow:"hidden",
  scrollTrigger: {
    trigger: "#page4 ",
    scroller:"body", // Set the correct trigger element
    // markers: true,      // Boolean, not a string
    start: "top 30%",  // Correct format
    end: "top -150%",
    scrub: 5,  
    pin:"true",     // Optional: Smooth scroll effect
  },
})
gsap.from("#layer-barba-transition",{
  yPercent: 100, 
});
gsap.to("#layer-barba-transition",{
  yPercent: -100, 
 
})
gsap.to("#layer-barba-transition",{
  yPercent: -200, 
 delay:"0.95",
})