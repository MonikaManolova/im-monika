import * as UI from "./FooterUI";
import Label from "../Label";
import { ReactComponent as GoTopBtn } from "../../assets/go-top.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <UI.FooterWrapper>
      <UI.Intro>
        <div>
          <UI.Title>Your time is valuable.</UI.Title>
          <Label style={{ margin: 0 }}>Thank you!</Label>
        </div>
        <GoTopBtn onClick={scrollToTop} />
      </UI.Intro>
      <div style={{ maxWidth: "1200px", margin: "40px auto" }}>
        <UI.Row>
          <UI.Name>Phone</UI.Name>
          <div className="value phone">+359 890 331 621</div>
        </UI.Row>
        <UI.Row>
          <UI.Name>E-mail</UI.Name>
          <div className="value">monikammanolova@gmail.com</div>
        </UI.Row>
        <UI.Row>
          <UI.Name>Linkedin</UI.Name>
          <UI.ItemLink
            href="https://www.linkedin.com/in/monika-manolova-1422aa188/"
            className="value link"
            target="_blank"
          >
            /monika-manolova-1422aa188
          </UI.ItemLink>
        </UI.Row>
      </div>
    </UI.FooterWrapper>
  );
};

export default Footer;
