import { resizeCursor } from "./resizeCursor";
import { gsap } from "gsap";

export const redirectToPage = (path, pageWrapper, navigate) => {
  pageWrapper &&
    gsap.to(pageWrapper, {
      duration: 0.5,
      opacity: 0,
    });
  setTimeout(() => {
    navigate(path);
  }, 600);
  resizeCursor();
};
