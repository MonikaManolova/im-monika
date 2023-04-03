import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #1f1e1c;
  padding: 60px;
`;

export const Intro = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    padding: 0 40px;
  }
`;

export const Title = styled.div`
  font-family: "Rocheck-Display";
  width: 340px;
  font-size: 44px;
  line-height: 54px;
  color: #e5dfd6;
  text-align: left;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgba(229, 223, 214, 0.3);
  border-bottom: 1px solid rgba(229, 223, 214, 0.3);
  color: #e5dfd6;
  .value {
    font-family: "Montserrat";
    font-size: 20px;
    text-align: right;
  }
`;

export const Name = styled.div`
  font-family: "Rocheck-Display";
  font-size: 26px;
  text-align: left;
`;

export const ItemLink = styled.a`
  color: #e5dfd6;
  &:hover {
    color: #e0ff23;
  }
`;
