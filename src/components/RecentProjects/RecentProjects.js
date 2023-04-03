import Header from "../Header";
import * as UI from "./RecentProjectsUI";
import { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RecentProjects = (props) => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        rotation: 15,
        y: 200,
      },
      {
        opacity: 1,
        rotation: 0,
        y: 0,
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: element,
          start: "top 30%",
          end: "60% bottom",
          scrub: true,
          //   markers: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        background: "#111110",
      }}
    >
      <UI.RecentWrapper>
        <Header text="Cooked over the time">Recent Projects</Header>
        <UI.ProjectsWrapper>{props.children}</UI.ProjectsWrapper>
      </UI.RecentWrapper>
    </div>
  );
};

export default RecentProjects;
