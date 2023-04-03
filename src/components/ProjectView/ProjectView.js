import RoleLabel from "../RoleLabel";
import * as UI from "./ProjectViewUI";

import { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectView = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut,
        scrollTrigger: !props.noAnim && {
          trigger: element,
          start: props.startValue || "-30% 30%",
          end: "center bottom",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  const changeCursor = (text, color) => {
    document.querySelector(".cursor").style.width = "100px";
    document.querySelector(".cursor").style.height = "100px";
    document.querySelector(".cursor").style.color = props.projectAvailable
      ? "#111110"
      : "#FFFFFF";
    document.querySelector(".cursor").style.background = props.projectAvailable
      ? "#E0FF23"
      : "#545555";
    document.querySelector(".cursor").innerHTML = props.projectAvailable
      ? "View"
      : "Soon!";
  };
  const redirect = (event) => {
    if (props.projectAvailable) {
      props.redirectToPage();
    } else {
      event.stopPropagation();
    }
  };

  return (
    <UI.CardWrapper
      className="project "
      ref={ref}
      coverImage={props.coverImage}
    >
      {props.name === "I am Sloty" && (
        <div className="video-wrapper">
          <video src={props.coverImage} width="100%" loop autoPlay muted />
        </div>
      )}
      {props.name === "Slototop" && <UI.Circle />}
      <UI.HoverElement
        onClick={redirect}
        onMouseEnter={changeCursor}
        onMouseLeave={props.resizeCursor}
      />
      <UI.ContentWrapper name={props.name}>
        <UI.Elements
          className={`${props.name === "BIANKI" && "dark-color"} content`}
        >
          <div style={{ textAlign: "left" }}>
            <span className="name">{props.name}</span>
            <span className="slash">/</span>
            <span className="category">{props.category}</span>
          </div>
          <UI.Roles>
            {props.roles.map((role, index) => (
              <RoleLabel text={role} key={index}>
                {role}
              </RoleLabel>
            ))}
          </UI.Roles>
        </UI.Elements>
      </UI.ContentWrapper>
    </UI.CardWrapper>
  );
};

export default ProjectView;
