import styled, { css } from "styled-components";

const text = css`
  ${(props) => props.text || "white"}
`;

const Role = styled.div`
  padding: 8px 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.13);
  font-size: 13px;
  width: max-content;
  transition: all 0.2s ease-in-out;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  color: #FFFFFF;
  span {
    transition: all 0.2s ease-in-out;
    position: relative;
    top: 0px;
  }
  &::after {
    transition: all 0.2s ease-in-out;
    content: "${text}";
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: -20px;
    font-family: "Bodoni-Italic";
    font-size: 15px;
    letter-spacing: 0.04rem;
    width: max-content;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &:hover span {
    top: -24px;
  }
  &:hover::after {
    bottom: 9px;
  }
`;

const RoleLabel = (props) => {
  const changeCursor = () => {
    document.querySelector(".follower").style.width = "0";
    document.querySelector(".follower").style.height = "0";
  };

  const resizeCursor = () => {
    document.querySelector(".follower").style.width = "44px";
    document.querySelector(".follower").style.height = "44px";
  };

  return (
    <Role
      onMouseEnter={changeCursor}
      onMouseLeave={resizeCursor}
      text={props.text}
      className="single-role"
    >
      <span>{props.children}</span>
    </Role>
  );
};

export default RoleLabel;
