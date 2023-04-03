import * as UI from "./HomepageUI";
import ProjectView from "../../components/ProjectView/ProjectView";
import { projects } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { resizeCursor } from "../../utils/resizeCursor";
import { redirectToPage } from "../../utils/redirectToPage";
import { ReactComponent as IntroHeader } from "../../assets/Intro-header.svg";
import starElement from "../../assets/star.svg";
import { ReactComponent as Hi } from "../../assets/hi.svg";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import Header from "../../components/Header";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "../../components/Navigation";

const Homepage = () => {
  const ref = useRef(null);
  const introRef = useRef(null);
  const navigate = useNavigate();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = introRef.current;

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    ScrollTrigger.create({
      trigger: element,
      pin: true,
      start: "top top",
      pinSpacing: false,
    });
    gsap.fromTo(
      element,
      {
        opacity: 0,
        height: "60vh",
      },
      {
        opacity: 1,
        height: "100vh",
        ease: Power2.easeInOut,
        duration: 0.8,
      }
    );
  }, []);

  return (
    <UI.PageWrapper ref={ref}>
      <UI.Intro id="home-intro-01" ref={introRef}>
        <Navigation />
        <div style={{ position: "relative", marginTop: "60px" }}>
          <img alt="star" src={starElement} />
          <IntroHeader />
          <div>
            <UI.Description>
              Hey, I am Monika, <span className="highlight">creative</span>{" "}
              UI/UX Designer. I create digital experiences and find design
              solutions for different kind of industries.
            </UI.Description>
            <UI.DescriptionEnd>
              <UI.Description>
                Let’s <span className="highlight">explore</span> my work.
              </UI.Description>
              <div className="d-flex align-items-center">
                <UI.Label>Projects</UI.Label>
                <ArrowDown />
              </div>
            </UI.DescriptionEnd>
          </div>
          <Hi />
        </div>
      </UI.Intro>
      <UI.ProjectsWrapper id="projects-wrapper-01">
        <Header text="Cooked over the time">Projects</Header>
        <UI.Container>
          {projects.map((project, index) => (
            <ProjectView
              key={index}
              name={project.name}
              coverImage={project.coverImage}
              category={project.category}
              roles={project.roles}
              projectAvailable={project.projectAvailable}
              redirectToPage={() =>
                redirectToPage(project.path, ref.current, navigate)
              }
              resizeCursor={resizeCursor}
            />
          ))}
        </UI.Container>
      </UI.ProjectsWrapper>
    </UI.PageWrapper>
  );
};

export default Homepage;
