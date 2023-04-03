// GRAPHIC ELEMENTS - - - - - - -
import iconAnimation from "../../assets/projects/shake-that-icon/logo-anim-2.mp4";
import logoAnimation from "../../assets/projects/shake-that-icon/logo-anim.mp4";
import colors from "../../assets/projects/shake-that-icon/colors.png";
import homepage from "../../assets/projects/shake-that-icon/homepage.png";
import editor from "../../assets/projects/shake-that-icon/editor.png";
import phone from "../../assets/projects/shake-that-icon/phone.png";
import { ReactComponent as Gift } from "../../assets/projects/shake-that-icon/gift.svg";
import { ReactComponent as Mic } from "../../assets/projects/shake-that-icon/mic.svg";
import { ReactComponent as Pin } from "../../assets/projects/shake-that-icon/pin.svg";
import { ReactComponent as Coffee } from "../../assets/projects/shake-that-icon/coffee.svg";
import { ReactComponent as Bell } from "../../assets/projects/shake-that-icon/bell.svg";
import { ReactComponent as ArrowUp } from "../../assets/projects/shake-that-icon/arrow-up.svg";
// COMPONENTS - - - - - - -
import * as UI from "./PageTemplateUI";
import PageTemplate from "./PageTemplate";

const ShakeThatIcon = (props) => {
  const icons = [<Gift />, <Mic />, <Pin />, <Coffee />, <Bell />, <ArrowUp />];

  return (
    <PageTemplate project={props.project}>
      <UI.VideoWrapper className="graphic-item">
        <video
          className="vertical-center"
          src={iconAnimation}
          width="100%"
          loop
          autoPlay
          muted
        />
      </UI.VideoWrapper>
      <UI.ColumsWrapper style={{ marginTop: "140px" }} className="graphic-item">
        <UI.Description>
          <p>
            <span className="highligh">The Logo</span> is represented by a small
            manikin, which never stops to dance and shake its body. These
            movements makes a reference to the interactive icons, that are
            “shaking” and moving based on the user actions.
          </p>
        </UI.Description>
        <UI.VideoWrapper>
          <video
            className="horizontal-center"
            src={logoAnimation}
            height="100%"
            loop
            autoPlay
            muted
          />
        </UI.VideoWrapper>
      </UI.ColumsWrapper>
      <UI.Image className="graphic-item" alt="color-scheme" src={colors} />
      <UI.Image alt="homepage" src={homepage} />
      <UI.ColumsWrapper style={{ marginTop: "0" }}>
        <UI.Description>
          <p>
            <span className="highligh">The Editor</span> enables users to
            manipulate specific icon based on their{" "}
            <span className="highligh">specific</span> needs.
          </p>
          <p>
            User can choose between when to trigger the animation and how many
            times. User can change the color, stroke-width, speed, add
            background and set different size of the icon.
          </p>
          <p>
            The edited icon can be <span className="highligh">downloaded</span>{" "}
            as Animated SVG, Static SVG, PNG or you can copy  the code of the
            animated icon and paste it into your project code.
          </p>
        </UI.Description>
        <UI.Image
          style={{ maxWidth: "540px", margin: "0" }}
          alt="editor"
          src={editor}
        />
      </UI.ColumsWrapper>
      <UI.IconsWrapper>
        {icons.map((icon, index) => (
          <UI.IconBox key={index}>{icon}</UI.IconBox>
        ))}
      </UI.IconsWrapper>
      <UI.Image className="graphic-item" alt="phone" src={phone} />
    </PageTemplate>
  );
};

export default ShakeThatIcon;
