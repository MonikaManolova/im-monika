import styled from "styled-components";

const StyledLabel = styled.div`
  background: #cae90e;
  border-radius: 5px;
  padding: 10px 14px;
  font-family: "Bodoni-Italic";
  color: #1e1e1e;
  font-size: 22px;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  top: -16px;
  transform: rotate(3deg);
`;
const Label = (props) => <StyledLabel className="main-label" {...props}>{props.children}</StyledLabel>;

export default Label;
