import styled from "styled-components";
import Navigation from "./Navigation";
import Logo from "../assets/Logo";

const StyledView = styled.div`
  background: #e5dfd6;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .header-part {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 30px;
    max-width: 320px;
    margin: 0 auto;
  }
  .text-part {
    font-weight: 400;
    max-width: 300px;
    margin: 0 auto;
    font-size: 16px;
    margin-top: 20px;
  }
  svg {
    position: absolute;
    top: 30px;
    left: 30px;
  }
`;
const MobileView = () => (
  <StyledView>
    {/* <Navigation style={{ padding: "24px", position: "relative", left: 0 }} /> */}
    <Logo />
    <div className="header-part">
      This project is not available on smaller devices
    </div>
    <div className="text-part">Try to open it on your computer or laptop.</div>
  </StyledView>
);

export default MobileView;
