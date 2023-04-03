import styled from "styled-components";

export const PageWrapper = styled.div`
  background: #111110;
  color: white;
  overflow: hidden;
  width: 100%;
  .path {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Intro = styled.div`
  width: 100%;
  height: 100vh;
  background: #e0d7ca;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    left: -70px;
    top: -40px;
  }
  .hi {
    position: absolute;
    top: -100px;
    right: -90px;
  }

  @media screen and (max-width: 1480px) {
    .intro-header {
      max-width: 560px !important;
      height: auto !important;
    }
    .hi {
      max-width: 130px;
      top: -80px;
      right: -70px;
    }
    img {
      width: 44px;
      left: -46px;
      top: -30px;
    }
  }
`;

export const Description = styled.div`
  font-family: "Montserrat";
  font-size: 18px;
  line-height: 28px;
  color: #1f1e1c;
  text-align: left;
  max-width: 600px;
  text-transform: uppercase;
  padding-left: 10px;
  .highlight {
    font-family: "Bodoni-Italic";
    font-size: 27px;
    text-transform: lowercase;
  }
  @media screen and (max-width: 1480px) {
    max-width: 560px;
  }
`;

export const Label = styled.span`
  font-size: 22px;
  color: #1f1e1c;
  font-family: "Bodoni-Italic";
  margin-right: 14px;
`;

export const DescriptionEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ProjectsWrapper = styled.div`
  background: #111110;
  position: relative;
  z-index: 100;
  .header-main {
    padding: 150px 0;
    padding-top: 200px;
  }
  .main-label {
    top: -24px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px 40px; /* To define the gap between rows/columns */
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px 80px 140px;
  @media screen and (max-width: 1100px) {
    padding: 80px 60px;
  }
  @media screen and (max-width: 900px) {
    padding: 60px 40px;
  }
  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 60px 20px;
  }
`;
