import styled from "styled-components";
import Label from "./Label";

const HeaderWrapper = styled.div`
  width: 100%;
`;

const SyledHeader = styled.div`
  font-family: "Rocheck-Display";
  font-size: 78px;
  line-height: 78px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  max-width: 660px;
  margin: 0 auto;
`;
const Header = (props) => (
  <HeaderWrapper className="header-main">
    <SyledHeader>{props.children}</SyledHeader>
    <Label>{props.text}</Label>
  </HeaderWrapper>
);

export default Header;
