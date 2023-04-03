import styled from "styled-components";
import { projects } from "../../constants";

export const RecentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  color: white;
  .header-main {
    padding: 150px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(620px, 1fr));
  grid-gap: 60px 40px; /* To define the gap between rows/columns */
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 120px;
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
