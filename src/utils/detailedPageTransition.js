import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const detailedPageTransition = (cover, contentWrapper) => {
  gsap.fromTo(
    cover,
    {
      height: "0",
      opacity: 0,
    },
    {
      delay: 0.5,
      duration: 0.6,
      height: "580px",
      opacity: 1,
    }
  );
  gsap.fromTo(
    contentWrapper,
    {
      opacity: 0,
    },
    {
      delay: 0.8,
      duration: 0.6,
      opacity: 1,
    }
  );

  setTimeout(() => {
    ScrollTrigger.create({
      trigger: cover,
      pin: true,
      start: "top top",
      pinSpacing: false,
    });
  }, 1100);
};
