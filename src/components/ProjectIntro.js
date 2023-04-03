import RoleLabel from "./RoleLabel";
import styled from "styled-components";

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  padding: 100px 0;

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    padding: 100px 60px;
  }
`;

const Header = styled.div`
  min-width: 460px;
  width: 460px;
  @media screen and (max-width: 1190px) {
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    min-width: 100%;
  }
`;

const Title = styled.div`
  text-align: left;
  margin-bottom: 50px;
  .name {
    font-family: "Rocheck-Display";
    font-size: 34px;
    line-height: 54px;
    color: #ffffff;
  }
  .category {
    font-family: "Bodoni-Italic";
    font-size: 30px;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 2px;
  }
`;

const ProjectDescription = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  color: #ffffff;
  font-size: 20px;
  line-height: 32px;
  text-align: left;
  .highligh {
    font-family: "Bodoni-Italic";
    font-size: 25px;
  }
`;

const RoleDescription = styled.div`
  margin-left: 80px;
  .single-role {
    font-size: 14px;
  }
  @media screen and (max-width: 1190px) {
    margin-left: 0px;
  }
`;

const Label = styled.div`
  margin-bottom: 30px;
  color: #ffffff;
  font-family: "Bodoni-Italic";
  font-size: 26px;
  color: rgba(255, 255, 255, 0.8);
  &.technology-label {
    margin-bottom: 20px;
  }
`;

const Roles = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex: auto auto;
  grid-gap: 8px 8px;
`;

const ProjectIntro = (props) => (
  <IntroWrapper>
    <Header>
      <Title>
        <div className="name">{props.name}</div>
        <div className="category">{props.category}</div>
      </Title>
      <ProjectDescription>{props.children}</ProjectDescription>
    </Header>
    <RoleDescription>
      <div style={{ textAlign: "left" }}>
        <Label>My role</Label>
        <Roles>
          {props.roles.map((role, index) => (
            <RoleLabel text={role} key={index}>
              {role}
            </RoleLabel>
          ))}
        </Roles>
      </div>
      <div style={{ textAlign: "left", marginTop: "50px" }}>
        <Label className="technology-label">Used technologies</Label>
        <ProjectDescription>{props.technologies}</ProjectDescription>
      </div>
    </RoleDescription>
  </IntroWrapper>
);

export default ProjectIntro;
