import RecentProjects from "../../components/RecentProjects/RecentProjects";
import ProjectView from "../../components/ProjectView/ProjectView";
import RoleLabel from "../../components/RoleLabel";
import Navigation from "../../components/Navigation";

import * as UI from "./PageTemplateUI";
import React, { useEffect, useRef } from "react";
import { detailedPageTransition } from "../../utils/detailedPageTransition";
import { useNavigate } from "react-router-dom";

import { resizeCursor } from "../../utils/resizeCursor";
import { redirectToPage } from "../../utils/redirectToPage";

import { gsap, Power2 } from "gsap";

const PageTemplate = (props) => {
  const contentWrapperRef = useRef(null);
  const projectWrapperRef = useRef(null);
  const headerWrapperref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    detailedPageTransition(headerWrapperref.current, contentWrapperRef.current);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    gsap.utils.toArray(".graphic-item").forEach((graphic, i) => {
      gsap.fromTo(
        graphic,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: graphic,
            start: "top 100%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });

    gsap.utils.toArray(".games-item").forEach((graphic, i) => {
      gsap.fromTo(
        graphic,
        {
          opacity: 0,
          y: -300,
        },
        {
          opacity: 1,
          y: -400,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: graphic,
            start: "top 100%",
            end: "center bottom",
            scrub: true,
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <UI.ProjectWrapper
      ref={projectWrapperRef}
      background={props.project.background}
    >
      <UI.HeaderWrapper
        coverImage={props.project.detailedCover}
        ref={headerWrapperref}
      >
        <Navigation color="#FFFFFF" />
      </UI.HeaderWrapper>
      <UI.ContentWrapper
        background={props.project.background}
        ref={contentWrapperRef}
      >
        <UI.IntroWrapper>
          <UI.Header>
            <UI.Title>
              <div className="name">{props.project.name}</div>
              <div className="category">{props.project.category}</div>
            </UI.Title>
            <UI.ProjectDescription
              dangerouslySetInnerHTML={{ __html: props.project.description }}
            />
          </UI.Header>
          <UI.RoleDescription>
            <div style={{ textAlign: "left" }}>
              <UI.Label>My role</UI.Label>
              <UI.Roles>
                {props.project.roles.map((role, index) => (
                  <RoleLabel text={role} key={index}>
                    {role}
                  </RoleLabel>
                ))}
              </UI.Roles>
            </div>
            <div style={{ textAlign: "left", marginTop: "50px" }}>
              <UI.Label className="technology-label">
                Used technologies
              </UI.Label>
              <UI.ProjectDescription>
                {props.project.technologies}
              </UI.ProjectDescription>
            </div>
          </UI.RoleDescription>
        </UI.IntroWrapper>
        <UI.GraphicsWrapper>{props.children}</UI.GraphicsWrapper>
        <RecentProjects borderColor="#1B5CFF">
          {props.project.recentProjects.map((project, index) => (
            <ProjectView
              key={index}
              name={project.name}
              coverImage={project.coverImage}
              category={project.category}
              roles={project.roles}
              projectAvailable={project.projectAvailable}
              redirectToPage={() =>
                redirectToPage(project.path, projectWrapperRef, navigate)
              }
              resizeCursor={resizeCursor}
              noAnim={true}
            />
          ))}
        </RecentProjects>
      </UI.ContentWrapper>
    </UI.ProjectWrapper>
  );
};

export default PageTemplate;
