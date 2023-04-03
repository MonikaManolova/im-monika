import styled, { keyframes, css } from "styled-components";

const background = css`
  ${(props) =>
    props.name === "BIANKI"
      ? "linear-gradient(180deg, rgba(239, 239, 239, 0) 0%, rgba(239, 239, 239, 0.65533) 25.5%, #EFEFEF 58.39%)"
      : props.name === "So Much Tasty"
      ? "inear-gradient(180deg, rgba(16, 95, 92, 0) 0%, #105F5C 83.82%)"
      : "linear-gradient(180deg, rgba(17, 17, 16, 0) 0%, #111110 45.9%)"}
`;

export const CardWrapper = styled.div`
  background: red;
  min-height: 660px;
  background: url(${(props) => `${props.coverImage}`}) no-repeat center center;
  background-size: 800px;
  position: relative;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  .video-wrapper {
    height: 100%;
    width: 100%;
    background: #0d0c46;
    display: flex;
    align-items: baseline;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  video {
    transition: all 0.3s ease-in-out;
  }
  /* &:hover {
    background-size: 850px;
  } */
  &:hover .content {
    max-height: 300px;
  }
  /* &:hover video {
    width: 110%;
  } */
`;

export const ContentWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  background: ${background};
  /* position: absolute; */
  /* bottom: 0; */
  position: relative;
  width: 100%;
  height: 230px;
`;

export const HoverElement = styled.div`
  width: 100%;
  height: calc(100% - 230px);
  position: relative;
  /* background: rgba(255, 255, 255, 0.4); */
`;

export const Elements = styled.div`
  padding: 40px;
  height: -webkit-fill-available;
  display: flex;
  -webkit-box-align: end;
  align-items: start;
  flex-direction: column;
  justify-content: end;
  transition: all 0.3s ease-in-out;
  .name {
    font-weight: 700;
    font-size: 28px;
  }
  .slash {
    font-weight: 400;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
    padding: 0 10px;
  }
  .category {
    font-size: 22px;
    font-family: "Bodoni-Italic";
    color: rgba(255, 255, 255, 0.8);
  }
  &.dark-color {
    color: #1f1e1c;
    .slash,
    .category {
      color: rgba(31, 30, 28, 0.8);
    }
    .single-role {
      background: rgba(31, 30, 28, 0.13);
      color: #1f1e1c;
    }
  }
`;

export const Roles = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex: auto auto;
  grid-gap: 8px 8px;
`;

const circleAnim = keyframes`
  0%, 100%{
  transform: rotateX(0deg);
  }
  40%{
  transform: rotateX(45deg);
  }
  66% {
    transform: rotateY(-45deg);
  }
`;

export const Circle = styled.div`
  width: 130px;
  height: 130px;
  border: 20px solid #ffd809;
  filter: drop-shadow(0px 2px 24px rgba(255, 216, 8, 0.6));
  border-radius: 100%;
  position: absolute;
  right: -55px;
  bottom: 200px;
  animation: ${circleAnim} 6s infinite;
`;
