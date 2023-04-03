import styled, { keyframes } from "styled-components";

const backgroundFadeIn = keyframes`
    0%{
        background-color: #111110;
    }
    100%{
        background-color: #0C0C0E;
    }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 580px;
  opacity: 0;
  background: url(${(props) => `${props.coverImage}`}) no-repeat center center;
  background-size: 2000px;
`;

// INTRO - - - - -

export const IntroWrapper = styled.div`
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

export const Header = styled.div`
  min-width: 460px;
  width: 460px;
  @media screen and (max-width: 1190px) {
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    min-width: 100%;
  }
`;

export const Title = styled.div`
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

export const ProjectDescription = styled.div`
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

export const RoleDescription = styled.div`
  margin-left: 80px;
  .single-role {
    font-size: 14px;
  }
  @media screen and (max-width: 1190px) {
    margin-left: 0px;
  }
`;

export const Label = styled.div`
  margin-bottom: 30px;
  color: #ffffff;
  font-family: "Bodoni-Italic";
  font-size: 26px;
  color: rgba(255, 255, 255, 0.8);
  &.technology-label {
    margin-bottom: 20px;
  }
`;

export const Roles = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex: auto auto;
  grid-gap: 8px 8px;
`;

export const ProjectWrapper = styled.div`
  animation: ${backgroundFadeIn} 0.6s ease-in-out;
  background-color: ${(props) => props.background};
  .m-0 {
    margin: 0;
  }
  .m-40 {
    margin: 40px 0;
  }
`;

export const ContentWrapper = styled.div`
  background: ${(props) => props.background};
  z-index: 999;
  position: relative;
  opacity: 0;
`;

export const GraphicsWrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const VideoWrapper = styled.div`
  overflow: hidden;
  height: 560px;
  min-width: 540px;
  position: relative;
  .vertical-center {
    position: absolute;
    left: 0;
    transform: translateY(-50%);
    top: 50%;
  }
  .horizontal-center {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    left: 50%;
  }
  @media screen and (max-width: 1000px) {
    min-width: 100%;
    height: 500px;
    .horizontal-center {
      height: 110%;
      transform: translate(-50%, -50%);
      top: 50%;
    }
    .jackpot-video {
      height: 100% !important;
    }
  }
`;

export const ColumsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  @media screen and (max-width: 1200px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  color: #ffffff;
  font-size: 20px;
  line-height: 32px;
  text-align: left;
  width: 100%;
  margin-right: 80px;
  .highligh {
    font-family: "Bodoni-Italic";
    font-size: 25px;
  }
  .desc-header {
    font-size: 30px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-weight: 700;
  }
  &.jackpot-description {
    margin: 0;
    padding: 50px 70px;
    background: #201d55;
    border-radius: 20px;
    margin-top: 40px;
  }
  @media screen and (max-width: 1200px) {
    margin-right: 40px;
  }
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: 80px 0;
  &.sloty-games-img {
    margin: 0;
    position: relative;
    top: -380px;
  }

  &.forms {
    max-width: 930px;
  }
`;

// export const ImagesContainer = styled.div`
//   position: relative;
//   img:nth-child(2){
//     position: absolute;
//     left: 0;
//     top: 60%;
//   }
// `

export const GamespageImgWrapper = styled.div`
  /* transform: translateY(-440px); */
  position: relative;
  .forms {
    /* position: absolute; */
    max-width: 930px;
    /* transform: translateX(-50%) !important; */
    /* left: 50%; */
    /* bottom: -200px; */
  }
`;

export const TransactionsPage = styled.div`
  display: flex;
  position: relative;
  margin-top: 40px;
  img:first-child {
    max-width: 910px;
    margin: 0;
  }
  .depositForm {
    margin: 0px;
    position: absolute;
    max-width: 380px;
    right: 0;
  }
`;

export const PromosPageWrapper = styled.div`
  margin: 60px;
  position: relative;
  img:first-child {
    max-width: 310px;
    margin: 0px;
    position: absolute;
    right: 0;
    top: -80px;
  }
  img:nth-child(2) {
    margin: 0px;
    position: relative;
    width: calc(100% + 50px);
  }
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(144px, 1fr));
  margin-top: 20px;
  margin-top: 80px;
`;

export const IconBox = styled.div`
  position: relative;
  overflow: hidden;
  background: #18191c;
  border-radius: 8px;
  border: 1px solid #282b2f;
  padding: 1rem;
  display: grid;
  place-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &::before {
    content: "";
    padding-bottom: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }

  svg {
    grid-area: 1 / 1 / 2 / 2;
    position: absolute;
  }

  &:hover {
    box-shadow: 0px 2px 22px rgb(0 3 0 / 60%);
    border: 1px solid #1b5cff;
  }
`;

export const PrototypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    max-width: 1600px;
    width: max-content;
  }
  video {
    max-width: 335px;
    position: absolute;
    transform: translateY(-50%);
    top: 42%;
  }
`;

export const SmallLabel = styled.div`
  font-size: 16px;
  text-align: left;
  color: #ffffff;
  margin-top: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const GridContainerThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
`;
