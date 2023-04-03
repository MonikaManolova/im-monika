import styled from "styled-components";
import React from "react";
import coverImage from "../assets/detailed-covers/sh-that-icon-detailed-cover.png";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 580px;
  opacity: 0;
  background: url(${coverImage}) no-repeat center center;
  background-size: 2000px;
`;

const ProjectHeader = React.forwardRef((props, ref) => {
  return <HeaderWrapper ref={ref} />;
});

export default ProjectHeader;
