import styled from "styled-components";
import Logo from "../assets/Logo";
import { useNavigate } from "react-router-dom";
const StyledNav = styled.div`
  position: absolute;
  padding: 40px 80px;
  z-index: 9999;
  width: 100%;
  top: 0;
  left: 40px;
  text-align: left;
`;

const Navigation = (props) => {
  const navigate = useNavigate();
  return (
    <StyledNav {...props} className="navbar">
      <Logo onClick={() => navigate("/")} color={props.color} />
    </StyledNav>
  );
};

export default Navigation;
